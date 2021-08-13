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
    nums.sort((a: number, b: number) => a - b);
    nums.forEach((num, i) => (nums1[i] = num));
    return nums1;
}

// Alternative uses less memory:

export function merge2(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): number[] {
    // while the length of the n (nums2.length) is greater than 0
    while (n) {
        // if the last value of nums1 is greater then last value of nums2
        if (nums1[m - 1] > nums2[n - 1]) {
            // assign last item in nums1 to end of array and decrease m
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        // if the last value of nums2 is greater than last value of nums1
        } else {
            // then insert nums2 value into last values of nums1
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    return nums1;
}
