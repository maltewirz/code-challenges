/**
Given an array, rotate the array to the right by k steps, where k is non-negative. 
Do not return anything, modify nums in-place instead.
 */
export function rotate1(nums: number[], k: number): number[] | undefined {
    if (nums.length > 1) {
        for (let i = 0; i < k; i++) {
            const last = nums.pop()!;
            nums.unshift(last);
        }
        return nums;
    }
};

export function rotate2(nums: number[], k: number): number[] | undefined {
    nums.unshift(...nums.splice(nums.length - k))
    return nums
};