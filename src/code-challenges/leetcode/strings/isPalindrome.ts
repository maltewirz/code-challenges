/**
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
 Given a string s, determine if it is a palindrome, considering only alphanumeric characters
 and ignoring cases.
 
 Example 1:
 Input: s = "A man, a plan, a canal: Panama"
 Output: true
 Explanation: "amanaplanacanalpanama" is a palindrome.
 
 Example 2:
 Input: s = "race a car"
 Output: false
 Explanation: "raceacar" is not a palindrome.
 */
 

export function isPalindrome(s: string): boolean {
    const alphaNumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const original = s
        .toLowerCase()
        .split('')
        .filter((l) => alphaNumericChars.includes(l))
        .join('');
    const reversed = original.split('').reverse().join('');

    return original === reversed;
}

// Complexity Analysis

// Time complexity : O(n), in length n of the string.

// Space complexity : O(n), in length n of the string. We need O(n) additional space to
// stored the filtered string and the reversed string.
