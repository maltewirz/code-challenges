// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

// Given a string s, return the first non-repeating character in it and return its index.
// If it does not exist, return -1.


export function firstUniqChar(s: string): number {
    const counter: { [key: string]: number } = {}
    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = (counter[s[i]] | 0) + 1
    }    
    for (let j = 0; j < s.length; j++) {        
        if (counter[s[j]] === 1) {
            return j
        }
    }    
    return -1
}

// Complexity Analysis

// Time complexity : O(N) since we go through the string of length N two times.
// Space complexity : O(1) because English alphabet contains 26 letters.
