// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

export function singleNumber(nums: number[]): number | undefined {
    const freqObject: {
        [key: string]: number;
    } = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        freqObject[curr] = (freqObject[curr] | 0) + 1;
    }

    for (const prop in freqObject) {
        if (freqObject[prop] === 1) {
            return Number(prop);
        }
    }
    return undefined;
}
