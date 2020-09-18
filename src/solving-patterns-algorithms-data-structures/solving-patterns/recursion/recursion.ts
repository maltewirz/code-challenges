// @ts-nocheck  // TODO Later: Remove this and fix types on stringifyNumbers

// Factorial function that takes a number and gives back the multiplied numbers leading up to it.

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

// Manual example:
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
        return 1;
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
    return fib(num - 1) + fib(num - 2);
}

// expect(fib(4)).toStrictEqual(3);
// manual visualization:
// 4
// return          fib(3)       +             fib (2)
//     return fib (2) + fib(1)             return 1
//         return 1 + return 1 +           return 1
// => 1 + 1 + 1 = 3 correct

// expect(fib(5)).toStrictEqual(5);
// manual visualization:
// 5
// return               fib(4)       +                          fib (3)
//     return fib(3)             + fib(2)                 return fib (2) + fib(1)
//     return fib (2) + fib(1)    + return 1                 return 1 + return 1
//     return  1       +  1         + 1                        +1         +1
// => 1 + 1 + 1 +1 +1 = 5 correct

// reverse
// Accepts a string and returns a new string in reverse

export function reverse(str: string): string {
    if (str.length === 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}

// Manual example:
//  input: hel
//  output: leh

// return reverse('el') + h
// return reverse('l') + e + h
// return l + e + h

// isPalindrome
// Returns true if the string passed to it reads the same forward and backwards.

export function isPalindrome(str: string): boolean {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[str.length - 1];
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}

// someRecursive
// Accepts an array and a callback. Returns true if a single value in the array
// return true when passed to the callback, otherwise false.
type cbFunction = (arg: number) => boolean;
export function someRecursive(arr: number[], cb: cbFunction): boolean {
    if (arr.length === 0) {
        return false;
    }
    if (cb(arr[0])) {
        return true;
    } else {
        return someRecursive(arr.slice(1), cb);
    }
}

// flatten
// Accepts an array of arrays and returns a new array with all values flattened.

export function flatten(arr: number[][]): number[] {
    let result: number[] = [];
    arr.forEach((pos: any) => {
        if (Number.isInteger(pos)) {
            result.push(pos);
            return pos;
        } else {
            result = result.concat(flatten(pos));
        }
    });
    return result;
}

// capitalizeFirst  - DIFFERENT WAY
// Given an array of strings, capitalize the first letter of each string in the array.

export function capitalizeFirst(arr: string[]): string[] {
    let result: string[] = [];
    if (arr.length < 1) {
        return [];
    }
    result.push(arr[0][0].toUpperCase() + arr[0].substring(1));
    result = result.concat(capitalizeFirst(arr.slice(1)));
    return result;
}

// nestedEvenSum
// Return the sum of all even numbers in an object which may contain nested objects.

export function nestedEvenSum(obj: any): number {
    let counter = 0;
    for (const e in obj) {
        if (typeof obj[e] === 'number' && obj[e] % 2 === 0) {
            counter += obj[e];
        } else if (typeof obj[e] === 'object') {
            counter += nestedEvenSum(obj[e]);
        }
    }
    return counter;
}

// capitalizeWords
// Given an array of words, return a new array containing each word capitalized

export function capitalizeWords(arr: string[]): string[] {
    let result = [];

    if (arr.length < 1) {
        return [];
    }

    result.push(arr[0].toUpperCase());
    result = result.concat(capitalizeWords(arr.slice(1)));
    return result;
}

// stringifyNumbers  -- REDO
// Takes an object and finds all off the values which are numbers and converts them to strings.
type inputObj = {
    num: number | string;
    test: any[];
    data: {
        val: number | string;
        info: {
            isRight: boolean;
            random: number | string;
        };
    };
};
export function stringifyNumbers(obj: inputObj): any {
    const newObj = {};

    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = String(obj[key]);
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// collectStrings
// Accepts ans object and returns an array of all values in the object that have a typeof string

type inputObj2 = {
    stuff: string;
    data: {
        val: {
            thing: {
                info: string;
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: string;
                    };
                };
            };
        };
    };
}

export function collectStrings(obj: inputObj2): string[] {
    let result: string[] = [];

    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else {
            result = result.concat(collectStrings(obj[key]));
        }
    }
    return result;
}