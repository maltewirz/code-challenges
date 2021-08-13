/**
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

Write a function that reverses a string.
The input string is given as an array of characters s.
Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 * 
 */

export function reverseString(s: string[]): string[] {
    return s.reverse();
}

export function reverseStringTwoPointer(s: string[]): string[] {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
}

export function reverseStringTwoPointer2(s: string[]): string[] {
    for (let i = 0; i < s.length / 2; i++) {
        const front = i;
        const back = s.length - i - 1;

        if (s[front] !== s[back]) {
            [s[front], s[back]] = [s[back], s[front]];
        }
    }
    return s;
}

// Complexity Analysis

// Time complexity : {O}(N) to swap N/2 element.

// Space complexity : {O}(1), it's a constant space solution.
