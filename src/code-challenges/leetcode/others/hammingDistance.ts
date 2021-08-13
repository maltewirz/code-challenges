// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/762/

// The Hamming distance between two integers is the number of positions at which the corresponding
// bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1

function hammingDistance(x: number, y: number): number {
    let diff = x ^ y;
    let result = 0;

    // find number of ones in the XOR result
    while (diff > 0) {
        if (diff & Number(1 === 1)) {
            result += 1;
        }
        diff >>= 1;
    }

    return result;
}
