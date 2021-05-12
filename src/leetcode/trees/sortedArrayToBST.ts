// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

// Given an integer array nums where the elements are sorted in ascending order, convert it
// to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees
// of every node never differs by more than one.

// Ex 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Ex 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

import { TreeNode } from './ITreeNode';

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    // subtrees are also BSTs
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
}
