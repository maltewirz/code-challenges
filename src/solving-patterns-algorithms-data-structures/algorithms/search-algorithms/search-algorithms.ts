// Intro to Linear Search
// Given an array, the simplest way to search for an value is to look at
// every element in the array and check if its the value the want. Examples:
// * indexOf, includes, find, findIndex

import { count } from 'console';

// #### Linear Search Big O

// O(1) Best   	O(n) Average		O(n) Worst

export function linearSearch(arr: string[], val: string): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// #### Binary Search

// * Much faster form of search for **sorted** arrays
// * Rather than eliminating one element at a time, you can eliminate
//      half of the remaining elements at a time.
// * Example: See Divide and Conque solving pattern

// #### Binary Search Big O

// O(log n) Worst and average  O(1) Best

export function binarySearch(arr: number[], val: number): number {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);
    while (arr[middle] !== val && left <= right) {
        if (arr[middle] < val) {
            // we add one to avoid redundant code - we already know its not the middle
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}

// Naive String Search
// Count the number of times a smaller string appears in a longer string.
// A straightforward approach involves checking pairs of characters individually.

export function naiveStringSearch(str: string, search: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < search.length; j++) {
            if (str[i] === search[j]) {
                if (j === search.length - 1) {
                    count++;
                }
                i++;
            }
        }
    }
    return count;
}

export function naiveStringSearchRefactor(
    str: string,
    search: string
): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < search.length; j++) {
            if (str[i + j] !== search[j]) {
                break;
            }
            if (j === search.length - 1) {
                count++;
            }
        }
    }
    return count;
}
