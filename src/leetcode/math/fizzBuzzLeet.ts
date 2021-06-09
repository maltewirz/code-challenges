// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

export function fizzBuzzLeet(n: number): string[] {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(String(i));
        }
    }
    return result;
}

// Algorithm Approach
// So for FizzBuzz we just check for two conditions
// instead of three conditions as in the first approach.

export function fizzBuzzLeetAlgo(n: number): string[] {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let append = '';
        if (i % 3 === 0) {
            append += 'Fizz';
        }
        if (i % 5 === 0) {
            append += 'Buzz';
        }
        if (append.length === 0) {
            append += String(i);
        }
        result.push(append);
    }

    return result;
}

// Hash Approach

export function fizzBuzzLeetHash(n: number): string[] {
    const fizzHash: {
        [key: number]: string;
    } = {
        3: 'Fizz',
        5: 'Buzz',
    };
    const result: string[] = [];
    
    for (let i = 1; i <= n; i++) {
        let append = '';
        if (i % 3 === 0) {
            append += fizzHash[i];
        }
        if (i % 5 === 0) {
            append += fizzHash[i];
        }
        if (append.length === 0) {
            append += String(i);
        }
        result.push(append);
    }

    return result;
}
