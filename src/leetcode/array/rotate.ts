/**
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
Given an array, rotate the array to the right by k steps, where k is non-negative. 
Do not return anything, modify nums in-place instead.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
 */
export function rotate1(nums: number[], k: number): number[] | undefined {
    if (nums.length > 1) {
        for (let i = 0; i < k; i++) {
            const last = nums.pop()!;
            nums.unshift(last);
        }
        return nums;
    }
}

export function rotate2(nums: number[], k: number): number[] | undefined {
    // splice cuts and remove the last elements, therefore it can then be unshifted.
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
}

// working, but not modifying nums in place - not obeying task rules.
export function rotate3(nums: number[], k: number): number[] | undefined {
    return nums.slice(k+1, nums.length).concat(nums.slice(0,k+1));
}
