// This pattern uses objects or sets to collect values/frequencies of values. This avoids nested loops O(n).
// The function same accepts two arrays and should return true if every value in the array has its corresponding
// value squared in the second array. The frequency of values must be the same.

import { feast } from '../8KYU/feast/feast';

export function sameOn2(arrA: number[], arrB: number[]): boolean {
    // complexity O(n^2). If arr 1000 lines, this runs 1 Mio. times.
    arrA = arrA.sort();
    arrB = arrB.sort();

    if (arrA.length !== arrB.length) {
        return false;
    }
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] * arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}

// The function same accepts two arrays and should return true if every value in the array has its corresponding
// value squared in the second array. The frequency of values must be the same.
export function sameOn(arrA: number[], arrB: number[]): boolean {
    // complexity O(n): If arr is 1000 lines, this runs 2000 times
    if (arrA.length !== arrB.length) {
        return false;
    }
    type CountType = {
        [key: number]: number;
    };

    const frequencyCounter1: CountType = {};
    const frequencyCounter2: CountType = {};

    for (const val of arrA) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of arrB) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (const key in frequencyCounter1) {
        const squaredKey = Number(key) * Number(key);

        if (!(String(squaredKey) in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// Anagram Function: A variation with strings

export function anagram(strA: string, strB: string): boolean {
    if (strA.length !== strB.length) {
        return false;
    }

    type freqObj = {
        [key: string]: number;
    };

    const frequencyCounter1: freqObj = {};
    const frequencyCounter2: freqObj = {};

    for (const val of strA) {
        frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
    }

    for (const val of strB) {
        frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
    }

    for (const val in frequencyCounter1) {
        // check if letter is in frequencyCounter2
        if (!(val in frequencyCounter2)) {
            return false;
        }
        // check if letter is same times in frequencyCounter2
        if (frequencyCounter1[val] !== frequencyCounter2[val]) {
            return false;
        }
    }
    return true;
}

export function anagramSingleCounter(strA: string, strB: string): boolean {
    if (strA.length !== strB.length) {
        return false;
    }

    type freqObj = {
        [key: string]: number;
    };

    const frequencyCounter: freqObj = {};

    for (const letter of strA) {
        frequencyCounter[letter] = (frequencyCounter[letter] | 0) + 1;
    }

    for (const letter of strB) {
        if (!frequencyCounter[letter]) {
            return false;
        }
        frequencyCounter[letter] = frequencyCounter[letter] - 1;
    }
    return true;
}

// This functions accepts a a variable number of arguments and checks whether there are any
// duplicates among the arguments passed in. Can be solved via frequency counter or multiple pointer pattern

export function areThereDuplicatesSolutionA(...arr: any): boolean {
    const setArr = new Set(arr);
    return setArr.size !== arr.length;
}

export function areThereDuplicatesSolutionB(...arr: any): boolean {
    type freqObj = {
        [key: string]: number;
    };

    const frequencyCounter: freqObj = {};

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        frequencyCounter[curr] = (frequencyCounter[curr] | 0) + 1;
        if (frequencyCounter[curr] > 1) {
            return true;
        }
    }
    return false;
}

// Given two positive integers, find out if the two numbers have the same frequency of digits

export function sameFrequency(numberA: number, numberB: number): boolean {
    const arrA = String(numberA).split('');
    const arrB = String(numberB).split('');

    if (arrA.length !== arrB.length) {
        return false;
    }
    
    type freqObj = {
        [key: string]: number;
    };

    const frequencyCounterA: freqObj = {};
    const frequencyCounterB: freqObj = {};

    for (let i = 0; i < arrA.length; i++) {
        const curr = arrA[i];
        frequencyCounterA[curr] = (frequencyCounterA[curr] | 0) + 1;
    }

    for (let i = 0; i < arrB.length; i++) {
        const curr = arrB[i];
        frequencyCounterB[curr] = (frequencyCounterB[curr] | 0) + 1;
    }

    for (const key in frequencyCounterA) {
        if (frequencyCounterA[key] !== frequencyCounterB[key]) {
            return false;
        }
    }
    return true;
}
