// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/

import { isConstructorTypeNode } from 'typescript';

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

export function isValidParentheses(s: string): boolean {
    const parentheses: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (stack.length === 0) {
            stack.push(curr);
        } else {
            const lastStack = stack[stack.length - 1];
            if (lastStack == parentheses[curr]) {
                stack.pop();
            } else {
                stack.push(curr);
            }
        }
    }

    return stack.length === 0;
}

// Alternative

export function isValidParenthesesAlternative(s: string): boolean {
    const map: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (map[curr]) {
            stack.push(map[curr]);
        } else if (curr !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
}
