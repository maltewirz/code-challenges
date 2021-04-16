// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
// the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

export function reverseInteger(x: number): number {
    const maxInteger: number = Math.pow(2, 31) - 1
    const output: number = Math.abs(
        parseInt(x.toString().split("").reverse().join(""))
    )
    return output > maxInteger ? 0 : output * Math.sign(x)
}