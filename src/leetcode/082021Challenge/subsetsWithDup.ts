/**
 https://leetcode.com/explore/featured/card/august-leetcoding-challenge-2021/613/week-1-august-1st-august-7th/3837/
 Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 
 The solution set must not contain duplicate subsets. Return the solution in any order.
 
 Example 1:
 
 Input: nums = [1,2,2]
 Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 Example 2:
 
 Input: nums = [0]
 Output: [[],[0]]
  
 
 Constraints:
 
 1 <= nums.length <= 10
 -10 <= nums[i] <= 10
 */

export function subsetsWithDup(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const res: number[][] = [];

    const dfs = (nums: number[], i: number, arr: number[]) => {
        if (i === nums.length) {
            res.push(arr);
            return;
        }
        dfs(nums, i + 1, arr);
        const newArr = arr.concat(nums[i]);
        dfs(nums, i + 1, newArr);
    };
    dfs(nums, 0, []);

    // cleaning duplicates from result
    //Alternative:
    // return Array.from(new Set(res.map(JSON.stringify)), JSON.parse)
    const hashMap: any = {};

    res.forEach(function (arr) {
        hashMap[arr.join('|')] = arr;
    });

    const hashed = Object.keys(hashMap).map(function (k) {
        return hashMap[k];
    });

    return hashed.sort();
}
