// # Dynamic Programming:
// * Method for solving a complex problem by breaking it down into a collection of simpler
//    subproblems, solving each of those subproblems just once, and storing their solutions.
// * Using past knowledge to make solving a future problem easier.

// It only works on problems with Optimal Substructure & Overlapping Subproblems.

// Overlapping Subproblems:
// A Problem that can be broken down into subproblems several times. E.g. the fibonacci sequence but not mergesort (divide and conquer).

// Big O Notation: O(2^n) - Very large since we recalculate a lot of the same input.
export function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// # Memoization
// Storing the results of expensive function calls and returning
// the cached result when the same inputs occur again.
// Big O Notation: O(n)

export function fibonacciMemo(n: number, memo: number[]): number {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// # Tabulation
// Storing the result of a previous result in a "table"
// (usually an array)
// Usually done using iteration
// Better space complexity than memoization.
// Big O Notation: O(n)

export function fibonacciTab(n: number): number {
    if (n <= 2) {
        return 1;
    }
    const fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibonacciTab(i - 1) + fibonacciTab(i - 2);
    }
    return fibNums[n];
}
