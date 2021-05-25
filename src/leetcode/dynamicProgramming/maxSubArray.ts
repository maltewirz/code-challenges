// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/
// Given an integer array nums, find the contiguous subarray (containing
//     at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

export function maxSubArray(nums: number[]): number {
    let max = nums[0];
    if (nums.length === 1) {
        return nums[0];
    }

    for (let win = 0; win <= nums.length; win++) {
        for (let i = 0; i < nums.length - win; i++) {
            let tempMax = 0;
            for (let j = i; j <= i + win; j++) {
                tempMax += nums[j];
            }
            if (tempMax > max) {
                max = tempMax;
            }
        }
    }
    return max;
}

// Complexity:
// Time O(n^2)
// Space O(1)

// Alternative with single pass
export function maxSubArray2(nums: number[]): number {
    let prev = 0;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
}

// Complexity:
// Time O(n)
// Space O(1)
