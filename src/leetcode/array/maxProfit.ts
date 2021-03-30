
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the
//     stock before you buy again).

export function maxProfit(prices: number[]): number {
    return calculate(prices, 0)
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
                const profit = calculate(prices, i + 1) + prices[i] - prices[start];
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