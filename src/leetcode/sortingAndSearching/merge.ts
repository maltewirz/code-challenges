// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1
// has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

export function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): number[] {
    const nums = nums1.slice(0, m).concat(nums2.slice(0, n));
    nums.sort((a:number, b: number) => a - b);
    nums.forEach((num, i) => nums1[i] = num)
    return nums1
}

// Alternative uses less memory:

export function merge2(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): number[] {
    let len = m + n;
    m--;
    n--;

    while (n >= 0) {
        len--;
        if (nums1[m] >nums2[n]) {
            nums1[len] = nums1[m--]
        } else {
            nums1[len] = nums2[n--]
        }
    }
    return nums1
}
