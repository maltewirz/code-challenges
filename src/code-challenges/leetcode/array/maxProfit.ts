/**
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the
    stock before you buy again).

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.
*/

export function maxProfit(prices: number[]): number {
    return calculate(prices, 0);
}

function calculate(prices: number[], s: number): number {
    if (s >= prices.length) {
        return 0;
    }
    let max = 0;
    for (let start = s; start < prices.length; start++) {
        let maxProfit = 0;
        for (let i = start + 1; i < prices.length; i++) {
            if (prices[start] < prices[i]) {
                const profit =
                    calculate(prices, i + 1) + prices[i] - prices[start];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
            if (maxProfit > max) {
                max = maxProfit;
            }
        }
    }
    return max;
}

// Complexity Analysis

// Time complexity : O(n^n). Recursive function is called n^n times.
// Space complexity : O(n). Depth of recursion is n.

export function maxProfitBest(prices: number[]): number {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    return maxProfit;
}

// Complexity Analysis

// Time complexity : O(n). Single pass.
// Space complexity : O(1). Constant space needed.



export function maxProfitBestSecond(prices: number[]): number {
    let result = 0;
    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < prices[i+1]) {
            result += prices[i+1] - prices[i]
        }
    }
    return result
}