// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Given an array of integers nums and an integer target, return indices of the two
// numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not
// use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

export function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return undefined;
}

// Complexity Analysis

// Time complexity : O(n^2). For each element, we try to find its complement by looping
// through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2).

// Space complexity : O(1).

// Alternative:
export function twoSum2(nums: number[], target: number): number[] | undefined {
    const dict: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const complement = target - curr;

        if (complement in dict) {
            return [dict[complement], i];
        }
        dict[curr] = i;
    }
    return undefined;
}

/**
 * loop through nums
 * save in dict: the value and its index
 *
 * for each number:
 *      is the target minus the current number in the dict ?
 */
