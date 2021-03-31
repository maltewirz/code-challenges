// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

export function containsDuplicate1(nums: number[]): boolean {
    const seen: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            return true
        }
        seen.push(nums[i])
    }
    return false
};

export function containsDuplicate2(nums: number[]): boolean {
    nums.sort()
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};

export function containsDuplicate3(nums: number[]): boolean {
    let set = new Set(nums);
    return (set.size < nums.length);
};
