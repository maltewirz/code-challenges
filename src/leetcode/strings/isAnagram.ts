/**
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
 
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 
 Example 1:
 Input: s = "anagram", t = "nagaram"
 Output: true
 
 Example 2:
 Input: s = "rat", t = "car"
 Output: false
 */

export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const freqCountS: { [key: string]: number } = {};
    const freqCountT: { [key: string]: number } = {};
    s.split('').forEach((l) => {
        freqCountS[l] = (freqCountS[l] | 0) + 1;
    });
    t.split('').forEach((l) => {
        freqCountT[l] = (freqCountT[l] | 0) + 1;
    });
    for (const key in freqCountT) {
        if (freqCountS[key] !== freqCountT[key]) {
            return false;
        }
    }
    return true;
}

// Complexity analysis

// Time complexity : O(n). Time complexity is O(n) because accessing the counter
// table is a constant time operation.

// Space complexity : O(1). Although we do use extra space, the space complexity is O(1)
// because the table's size stays constant no matter how large n is.

export function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sArr = s.split('').sort();
    const tArr = t.split('').sort();
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            return false;
        }
    }
    return true;
}

// Complexity analysis

// Time complexity : O(n log n). Assume that n is the length of s,
// sorting costs O(n log n) and comparing two strings costs O(n).

// Space complexity : Space costs O(1)

export function isAnagram3(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const freqCountS: { [key: string]: number } = {};
    const freqCountT: { [key: string]: number } = {};
    s.split('').forEach((l) => {
        freqCountS[l] ? freqCountS[l]++ : (freqCountS[l] = 1);
    });
    t.split('').forEach((l) => {
        freqCountT[l] ? freqCountT[l]++ : (freqCountT[l] = 1);
    });
    for (const key in freqCountT) {
        if (freqCountS[key] !== freqCountT[key]) {
            return false;
        }
    }
    return true;
}

export function isAnagram4(s: string, t: string): boolean {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
