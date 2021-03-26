// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/numsay/727/

// Given a sorted numsay nums, remove the duplicates in-place such that each element
// appears only once and returns the new length.

// Do not allocate extra space for another numsay,
// you must do this by modifying the input numsay
// in-place with O(1) extra memory.

export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
}