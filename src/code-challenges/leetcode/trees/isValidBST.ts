//leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
//     5
// 1       4
//       3   6

// Another false BST:
//     5
// 4       6
//       3   7

import { TreeNode } from './ITreeNode';


function isValidBST(root: TreeNode | null): boolean | number {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(
        root: TreeNode | null,
        min: number | null,
        max: number | null
    ): any {
        if (!root) {
            return true; // We hit the end of the path
        }

        if (
            (min !== null && root.val <= min) ||
            (max !== null && root.val >= max)
        ) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return (
            helper(root.left, min, root.val) &&
            helper(root.right, root.val, max)
        );
    }

    return helper(root, null, null);
}

function isValidBSTRecursive(
    root: TreeNode | null,
    min: number | TreeNode | null = null,
    max: number | TreeNode | null = null
): boolean | number {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return (
        isValidBSTRecursive(root.left, min, root) &&
        isValidBSTRecursive(root.right, root, max)
    );
}

// Complexity
// Time: O(n)
// Space: O(n)