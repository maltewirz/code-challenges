// Multiple Pointers Pattern:
// Creating pointers or values that correspond to an index or position and
// move towards the beginning, end or middle based on a certain condition.
// Very efficient for solving problems with minimal space complexity as well.

// sumZero function:
// The function sumZero accepts a sorted array of integers.
// Find the first pair where the sum is 0 and return it, else return undefined.

export function sumZeroOn2(arr: number[]): number[] | undefined {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Prerequisite for this approach is a sorted array.
export function sumZeroOn(arr: number[]): number[] | undefined {
    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length - 1; i++) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

// countUniquevalues
// Function that accepts a sorted array and counts the unique values in
// the array. There can be negative numbers in the array, but it will always be sorted.

export function countUniquevalues(arr: number[]): number {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            counter++;
        }
    }
    return counter;
}

// This functions accepts a a variable number of arguments and checks whether there are any
// duplicates among the arguments passed in. Can be solved via frequency counter
// or multiple pointer pattern

export function areThereDuplicatesSolution(...arr: any): boolean {
    arr.sort((a: any, b: any) => a > b);
    let start = 0;
    let next = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[start] === arr[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// averagePair
// Given a sorted array of integers and a target average, determine if there is
// a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

export function averagePair(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        const avg = (arr[left] + arr[right]) / 2;
        if (avg > target) {
            right--;
        } else if (avg < target) {
            left++;
        } else {
            return true;
        }
    }
    return false;
}

// isSubsequence
// Takes in two strings and checks whether the characters in the first string form
// a subsequence of the characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere in the second string
// without their order changing.

export function isSubsequenceIterative(str1: string, str2: string): boolean {
    let leftPointer = 0;
    let rightPointer = 0;

    if (str1.length === 0) {
        return true
    }
    if (str2.length === 0) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        // false condition when end of str2 is reached
        if (rightPointer === str2.length - 1) {
            return false;
        }
        // letter is found and next char of str1 is taken.
        if (str1[leftPointer] === str2[rightPointer]) {
            leftPointer++;
        }
        // in each iteration, we want to move the pointer on the right.
        rightPointer++;
    }
    return true;
}

// The same as above, but in a recursive solution.
export function isSubsequenceRecursive(str1: string, str2: string): boolean {
    if (str1.length === 0) {
        return true
    }
    if (str2.length === 0) {
        return false;
    }

    if (str2[0] === str1[0]) {
        return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
    }
    return isSubsequenceRecursive(str1, str2.slice(1));
}