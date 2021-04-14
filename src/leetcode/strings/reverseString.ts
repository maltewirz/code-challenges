// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

// Write a function that reverses a string.The input string is given as an array of characters s.

export function reverseString(s: string[]): string[] {
    return s.reverse();
}

export function reverseStringTwoPointer(s: string[]): string[] {
    let left = 0;
    let right = s.length-1
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]        
        left++;
        right--;
    }
    return s
}

// Complexity Analysis

// Time complexity : {O}(N) to swap N/2 element.

// Space complexity : {O}(1), it's a constant space solution.