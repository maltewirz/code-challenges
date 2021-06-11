// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

import { lookup } from 'dns';
import { primeFactors } from '../../code-challenges/5KYU/primeFactors/primeFactors';

// Count the number of prime numbers less than a non-negative number, n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// this approach works but too slow
export function countPrimes(n: number): number {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    // the for loop reduces the numbers to be checked by half.
    // only if the iterator can be squared and is still smaller than num, start this loop.
    for (let i = 2; i * i <= num; i++) {
        // this is the general check if prime or not.
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// To check if a number is prime or not, we simply check if its divisors include anything other
// than 1 and the number itself.

// 1. Smallest prime number is 2, so we can mark all numbers divisable by two as non-prime.
// How-to: If number non-prime, we assign -1: primes[4] = -1
// 2. Next smallest prime is 3, so we mark them too (9, 15, etc)
// 3. The rest of the numbers are primes
// 4. Now we can loop. The outer loop will start at 2 and go up to √2 (the factorisations will
//     repeat themself in reverse order after the first half)
// 5. The inner loop starts at i*i

// Algorithm for Sieve of Eratosthenes:
// 1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
// 2. Let p be the variable we use in the outer loop that iterates from 2 to \sqrt{n} // n
//      Initially, let p equal 2, the smallest prime number.
// 3. Enumerate the multiples of p by counting in increments of p from p*p to n, and mark them in the list
// (these will be p*p, p*p + p, p*p + 2*p, ...; p itself should be prime).
// 4. Find the smallest number in the list greater than p that is not marked. If there was no such number,
// stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
// 5. When the algorithm terminates, all of the remaining numbers that are not marked are prime.

export function countPrimesAlgo(n: number): number {
    // create an array for all the numbers from 0 to n and marked them as true
    const isPrime = new Array(n).fill(true);
    let count = 0;
	// mark 1 as false as it is not prime for sure
    isPrime[1] = false;
    // start looping from 2 as we already mark 1 as Not Prime before

    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) {
            continue;
        }
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    return count;
}
