// Factorial function that takes a number and gives back the multiplied numbers leading up to it.

import { sumMix } from "../../8KYU/sumMix/sumMix";
import { menFromBoys } from "../../7KYU/menFromBoys/menFromBoys";
import { findLongestSubstring } from "../slidingWindow/slidingWindow";

export function factorial(num: number): number {
    if (num === 1) {
        return num;
    }
    return num * factorial(num - 1);
}

// Design pattern: Helper Method Recursion
// Function takes array and collects odd values

export function collectOddValuesHelperMethod(arr: number[]): number[] {
    const result: number[] = [];

    function helper(helperInput: number[]): void {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// Design method: Pure Recursion
// Function takes array and collects odd values

// Hints for pure recursion:
// * For arrays, use methods like **slice** , **the spread operator**, and **concat** that make copies of arrays so you do not mutate them
// * Remember that strings are immutable so you will need to use methods like **slice, subst or substrin**g  to make copies of strings
// * To make copies of objects use Object.assign, or the spread operator

export function collectOddValuesPureRecursion(arr: number[]): number[] {
    let result: number[] = [];

    if (arr.length === 0) {
        return [];
    }
    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }
    result = result.concat(collectOddValuesPureRecursion(arr.slice(1)));

    return result;
}

// power
// Function aceppts a base and an exponent. Return the power of the base to the exponent.

// 2^4 = 2*2*2*2
// 2 * power(2, 3)
//     2 * power(2, 2)
//         2 * power(2, 1)
//             2 * power(2, 0)
//                     return 1
// = 2*2*2*2*1

export function power(a: number, b: number): number {
    if (b < 1) {
        return 1;
    }
    return a * power(a, b - 1);
}


// productOfArray
// Takes array of numbers and returns the product of them all.

export function productOfArray(arr: number[]): number {
    if (arr.length < 1) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange
// Takes a number and adds up all the numbers from 0 to the number passed to the function

export function recursiveRange(num: number): number {
    if (num === 1) {
        return 1
    }
    return num + recursiveRange(num - 1);
}

// fib
// Takes a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence
// is the sequemce pf whole number 1,1,2,3,5,8... which starts with 1 and 1 and where every number thereafter
// is equal to the sum of the previous two numbers.

export function fib(num: number): number {
    
    if (num <= 2) {
        return 1;
    }
    return fib(num-1) + fib(num-2)
}