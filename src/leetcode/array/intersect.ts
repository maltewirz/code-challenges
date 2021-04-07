// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

export function intersect(nums1: number[], nums2: number[]): number[] {
    const result = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            result.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]), 1)
        }
    }
    return result;
}