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
        maxSum += arr[i]
    }
    tempSum = maxSum;

    for (let i = window; i < arr.length;i++) {
        // subtract the oldest number, and add new number
        tempSum = tempSum - arr[i-window] + arr[i];
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}
