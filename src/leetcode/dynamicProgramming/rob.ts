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

export function rob(nums: number[]): number {
    console.log(nums, nums.length, nums[nums.length-1])
    return helper(nums.length -1)

    function helper(i: number): number {
        console.log('called for i', i)
        if (i < 0) {
            return 0;
        }
        return Math.max(helper(i-2) + nums[i], helper(i-1))
    }
}

// Solution explanation:
// A robber has 2 options: a) rob current house i; b) don't rob current house.
// If an option "a" is selected it means she can't rob previous i-1 house but can
// safely proceed to the one before previous i-2 and gets all cumulative loot that follows.
// If an option "b" is selected the robber gets all the possible loot from robbery
// of i-1 and all the following buildings.
// So it boils down to calculating what is more profitable:

// A: robbery of current house + loot from houses before the previous
// B: loot from the previous house robbery and any loot captured before that
// rob(i) = Math.max(rob(i - 2) + currentHouseValue,     rob(i - 1))

// Example: [1, 2, 3, 1]
// Option A: rob current i and i-2 : Example: 1 (the last) + 2
// Option B: rob i-1 : Example 3 + 1 = 4 (winner)


