// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

export function maxProfit(prices: number[]): number {
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    return max;
}

// Complexity Analysis

// Time complexity : O(n^2).
// Space complexity : O(1). Only one variable is used

// Alternative Solution:

// The points of interest are the peaks and valleys in the given graph.
// We need to find the largest peak following the smallest valley. We
// can maintain two variables - minprice and maxprofit corresponding
// to the smallest valley and maximum profit (maximum difference
//     between selling price and minprice) obtained so far respectively.

export function maxProfitOnePass(prices: number[]): number {
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
}

// Complexity Analysis

// Time complexity : O(n). Single pass.
// Space complexity : O(1). Only two variables are used.
