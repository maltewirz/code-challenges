// This pattern involves creating a windows which can either be an array or number
// from one position to another. Depending on a certain condition, the window either
// increases or closes (and a new window is created)
// Useful for keeping track of a subset of data in an array/string etc.

// maxSubarraySum:
// The function accepts an array of integers and a number called n. Calculate
// maximum sum of n consecutive elements in the array.

export function maxSubarraySumON(arr: number[], window: number): number | null {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < window) {
        return null;
    }

    for (let i = 0; i < window; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = window; i < arr.length; i++) {
        // subtract the oldest number, and add new number
        tempSum = tempSum - arr[i - window] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

// minSubArrayLen
// Accepts two parameters, an array of positive integers and a positve integer.
// The function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there isn't one,
// return 0 instead.

export function minSubArrayLen(nums: number[], sum: number): number {
    let slidingSum = 0;
    let start = 0;
    let end = 0;
    let minLen = nums.length;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum,
        // and has not reached end of array
        // add the current number to the total and move window to the right
        if (slidingSum < sum && end < nums.length) {
            slidingSum += nums[end];
            end++;
        }

        // if current window adds up to the least the sum given
        // we substract the current start number from total and shrink the window
        else if (slidingSum >= sum) {
            if (end - start < minLen) {
                minLen = end - start;
            }
            slidingSum -= nums[start];
            start++;
        }

        // current total less then required total but we reach the end,
        // need this or else we'll be in an infinite loop
        else {
            break;
        }
    }
    return minLen;
}

// findLongestSubstring
// Accepts a string and returns the length of the longest
// substring with all distinct characters.

export function findLongestSubstring(str: string): number {
    let longest = 0;
    type seenObject = {
        [key: string]: number;
    };
    const seen: seenObject = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
