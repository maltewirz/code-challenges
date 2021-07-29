// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/numsay/727/

// Given a sorted array nums, remove the duplicates in-place such that each element
// appears only once and returns the new length.

// Do not allocate extra space for another array,
// you must do this by modifying the input array
// in-place with O(1) extra memory.

export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

export function removeDuplicatesSecondTry(nums: number[]): number {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
