/**
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 Given an integer array nums, move all 0's to the end of it while maintaining the
 relative order of the non-zero elements.
 
 Note that you must do this in-place without making a copy of the array.
 
  
 
 Example 1:
 
 Input: nums = [0,1,0,3,12]
 Output: [1,3,12,0,0]
 Example 2:
 
 Input: nums = [0]
 Output: [0]
 */
 

export function moveZeroes(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(nums.indexOf(nums[i]), 1);
            nums.push(0);
        }
    }
    return nums;
}

// Complexity Analysis

// Time complexity : ??
// Space complexity : ??

export function moveZeroes2(nums: number[]): number[] {
    let lastNonZeroFoundAt = 0;
    // if current element is not 0, append it to last non 0 element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

// Complexity Analysis

// Space Complexity : O(1). Only constant space is used.
// Time Complexity: O(n). However, the total number of
// operations are still sub-optimal. The total operations (array writes) that code does is n (Total number of elements).


export function moveZeroes3(nums: number[]): number[] {
    let slow = 0;
    // if current element is not 0, append it to last non 0 element
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            nums[slow++] = nums[fast];
        }
    }

    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}