/**
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 
 Given a non-empty array of decimal digits representing a non-negative integer, increment
 one to the integer.
 The digits are stored such that the most significant digit is at the head of the list,
 and each element in the array contains a single digit.
 You may assume the integer does not contain any leading zero, except the number 0 itself.
 
 
 Example 1:
 
 Input: digits = [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.
 Example 2:
 
 Input: digits = [4,3,2,1]
 Output: [4,3,2,2]
 Explanation: The array represents the integer 4321.
 Example 3:
 
 Input: digits = [0]
 Output: [1]
 */

export function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
            if (i == 0) {
                digits.unshift(1);
            }
        }
    }
    return digits;
}

/** 
 Complexity Analysis
 
 Time complexity : O(n). Maximum one pass along input list
 Space complexity : O(n). Operation performed in-place, but space needed to hold the result
 which contains n+1 elements.
 
 This approach is not working due to number size limitation:
 export function plusOne(digits: number[]): number[] {
     const newDigits = Number(digits.join('')) + 1;
     return String(newDigits).split('').map(x => +x);
 }
 */

export function plusOne2(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else if (digits[i] === 9) {
            digits[i] = 0;
            // if the number at the very left is zero, a new 1 needs to be unshifted to front.
            if (i === 0) {
                digits.unshift(1);
            }
        }
    }
    return digits;
}
