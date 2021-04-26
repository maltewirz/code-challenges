// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }
    // taking the first word and name it prefix
    let prefix = strs[0];
    // looping through the rest of the words
    for (let i = 1; i < strs.length; i++) {
        // while the prefix as a whole cannot be found in the current word
        while (strs[i].indexOf(prefix) != 0) {
            // gradually shorten the prefix, until its found in the current word
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) {
                return '';
            }
        }        
    }
    return prefix
}

// Complexity Analysis

// Time complexity : O(S) , where S is the sum of all characters in all strings.

// Space complexity : O(1). We only used constant extra space.