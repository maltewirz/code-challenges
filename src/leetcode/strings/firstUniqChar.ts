/**
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

Given a string s, return the first non-repeating character in it and return its index.
If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 */

export function firstUniqChar(s: string): number {
    const counter: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = (counter[s[i]] | 0) + 1;
    }
    for (let j = 0; j < s.length; j++) {
        if (counter[s[j]] === 1) {
            return j;
        }
    }
    return -1;
}

// Complexity Analysis

// Time complexity : O(N) since we go through the string of length N two times.
// Space complexity : O(1) because English alphabet contains 26 letters.

export function firstUniqChar2(s: string): number {
    for (let i =0; i < s.length; i++) {
        const char = s[i]
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return i
        }
    }
    return -1
}