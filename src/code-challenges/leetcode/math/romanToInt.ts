// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written
// as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the
// numeral for four is not IIII. Instead, the number four is written as IV. Because the one
// is before the five we subtract it making four. The same principle applies to the number
// nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

export function romanToInt(s: string): number {
    const alpha: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        const curr = alpha[arr[i]];
        const next = alpha[arr[i + 1]];
        if (next > curr) {
            result -= curr;
        } else {
            result += curr;
        }
    }
    return result;
}

/**
 * 1. parse string char for char
 * 2. when looking at currrent char, is next char bigger or smaller?
 *  2.1 if next piece bigger, subtract current char from total
 *  2.2 if next piece smaller, add to total
 *
 *
 */
