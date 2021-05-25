// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

export function climbStairs(n: number): number {
    const memo: number[] = [];

    function helper(n: number) {
        if (memo[n] !== undefined) {
            return memo[n];
        }

        if (n <= 3) {
            return n;
        }

        memo[n] = helper(n - 1) + helper(n - 2);
        return memo[n];
    }
    return helper(n);
}

// Runtime: 72 ms
// Memory Usage: 38.9 MB

// Alternative without helper:
// function climbStairs(n: number, memo: number[]): number {
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }

//     if (n <= 3) {
//         return n;
//     }F

//     const memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     return memo[n];
// }


export function climbStairsIterative(n: number): number {
    const arr = [1,2];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n-1]
}

// Runtime: 80 ms
// Memory Usage: 38.8 MB