// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
// Example 4:

// Input: n = 45
// Output: false

export function isPowerOfThree(n: number): boolean {
    console.log(n, n % 3 === 0)
    return n % 3 === 0;
}
