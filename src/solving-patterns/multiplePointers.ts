// Multiple Pointers Pattern:
// Creating pointers or values that correspond to an index or position and 
// move towards the beginning, end or middle based on a certain condition. 
// Very efficient for solving problems with minimal space complexity as well.

// sumZero function:
// The function sumZero accepts a sorted array of integers. 
// Find the first pair where the sum is 0 and return it, else return undefined.

export function sumZeroOn2(arr: number[]): number[] | undefined {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Prerequisite for this approach is a sorted array.
export function sumZeroOn(arr: number[]): number[] | undefined {
    let left = 0;
    let right = arr.length -1;

    for (let i = 0; i < arr.length-1; i++) {        
        const sum = arr[left] + arr[right];
        if (sum === 0) {        
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left++;
        }
    }
    return undefined
}


// countUniquevalues
// Function that accepts a sorted array and counts the unique values in
// the array. There can be negative numbers in the array, but it will always be sorted.

export function countUniquevalues(arr: number[]): number {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            counter++;
        }
    }
    return counter;
}



// This functions accepts a a variable number of arguments and checks whether there are any
// duplicates among the arguments passed in. Can be solved via frequency counter or multiple pointer pattern

export function areThereDuplicatesSolution(...arr: any): boolean {
    arr.sort((a: any,b: any) => a > b);
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