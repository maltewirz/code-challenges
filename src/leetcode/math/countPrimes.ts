// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

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
    console.log('num', num)
    if (num <= 1) {
        return false
    }
    // the for loop reduces the numbers to be checked by half.
    // only if the iterator can be squared and is still smaller than num, start this loop.
    for (let i = 2; i*i <= num; i++) {
        console.log(num, i, i*i)
        // this is the general check if prime or not.
        if (num % i === 0) {
            return false
        }
    }
    return true

}