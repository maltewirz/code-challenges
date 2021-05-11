// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Ex 1
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Ex 2
// Input: root = [1,2,2,null,3,null,3]
// Output: false

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isSymmetric(root: TreeNode | null): boolean {
    function helper(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (t1 === null && t2 === null) {
            return true;
        }
        if (t1 === null || t2 === null) {
            return false;
        }
        // Compare the left and right subtree
        return (
            t1.val === t2.val &&
            helper(t1.right, t2.left) &&
            helper(t1.left, t2.right)
        );
    }

    return helper(root, root);
}

// Complexity
// Time O(n)
// Space O(n)