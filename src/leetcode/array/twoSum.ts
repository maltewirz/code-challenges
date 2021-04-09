// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Given an array of integers nums and an integer target, return indices of the two
// numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not
// use the same element twice.
// You can return the answer in any order.

export function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return undefined
}

// Complexity Analysis

// Time complexity : O(n^2). For each element, we try to find its complement by looping
// through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2).

// Space complexity : O(1).