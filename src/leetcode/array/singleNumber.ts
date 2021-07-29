/**
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 Given a non-empty array of integers nums, every element appears twice except for one.
 Find that single one.
 
 Example 1:
 
 Input: nums = [2,2,1]
 Output: 1
 Example 2:
 
 Input: nums = [4,1,2,1,2]
 Output: 4
 Example 3:
 
 Input: nums = [1]
 Output: 1
*/

export function singleNumber(nums: number[]): number | undefined {
    const freqNumber: {
        [key: string]: number;
    } = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        freqNumber[curr] = (freqNumber[curr] | 0) + 1;
    }

    for (const number in freqNumber) {
        if (freqNumber[number] === 1) {
            return Number(number);
        }
    }
    return undefined;
}
