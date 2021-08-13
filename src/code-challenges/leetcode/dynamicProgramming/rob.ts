// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

// You are a professional robber planning to rob houses along a street. Each house has a
// certain amount of money stashed, the only constraint stopping you from robbing each of
// them is that adjacent houses have security systems connected and it will automatically
// contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the
// maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Solution explanation recursive top down approach:
// A robber has 2 options: a) rob current house i; b) don't rob current house.
// If an option "a" is selected it means she can't rob previous i-1 house but can
// safely proceed to the one before previous i-2 and gets all cumulative loot that follows.
// If an option "b" is selected the robber gets all the possible loot from robbery
// of i-1 and all the following buildings.
// So it boils down to calculating what is more profitable:

// A: robbery of current house + loot from houses before the previous
// B: loot from the previous house robbery and any loot captured before that
// rob(i) = Math.max( currentHouseValue + rob(i - 2) , rob(i - 1))

// Example: [1, 2, 3, 1]
// Option A: rob current i and i-2 : Example: 1 (the last) + 2
// Option B: rob i-1 : Example 3 + 1 = 4 (winner)

// Recursive top down approach;
export function robRecursive(nums: number[]): number {
    return helper(nums.length - 1);

    function helper(i: number): number {
        if (i < 0) {
            return 0;
        }
        return Math.max(nums[i] + helper(i - 2), helper(i - 1));
    }
}

// Iterative bottom up approach with memo
export function robIterative(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    // The three lines below not needed, manual overview of process
    // if (nums.length === 2) {
    //     return Math.max(nums[0], nums[1]);
    // }

    const memo = [];
    // The amount of money we can rob to the first house (0 index) is:
    memo[0] = nums[0];
    // The amount of money we can rob to the second house is the richest from the first two houses:
    memo[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
    }
    return memo[nums.length - 1];
}
