// leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
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
    // Sanity check for passing test case '[]'
    if (!root) {
        return true;
    }

    function helper(
        root: TreeNode | null,
        min: number | null,
        max: number | null
    ): any {
        // We hit the end of the path
        if (!root) {
            return true;
        }

        // current node's val doesn't satisfy the BST rules
        if (
            (min !== null && root.val <= min) ||
            (max !== null && root.val >= max)
        ) {
            return false;
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

function isValidBSTDepthFirst(root: TreeNode | null): boolean | number {
    if (root === null) {
        return true;
    }
    const queue = [root];
    const min: any[] = [-Infinity];
    const max: any[] = [Infinity];

    while (queue.length > 0) {
        const current = queue.shift();
        const minCurr = min.shift();
        const maxCurr = max.shift();

        if (current) {
            if (current.val <= minCurr || current.val >= maxCurr) {
                return false;
            }
            if (current?.right) {
                queue.push(current.right);
                min.push(current.val);
                max.push(maxCurr);
            }
            if (current?.left) {
                queue.push(current.left);
                min.push(minCurr);
                max.push(current.val);
            }
        }
    }
    return true;
}

function isValidBSTDepthFirst2(root: TreeNode | null): boolean | number {
    if (root === null) {
        return true
    }

    const stack = [{node: root, min: -Infinity, max: Infinity}]

    while (stack.length > 0) {
        const {node, min, max} = stack.pop() // using shift or pop is both accepted

        if (node.val <= min || node.val >= max) {
            return false
        }

        if (node.left) {
            stack.push({node: node.left, min, max: node.val})
        }
        if (node.right) {
            stack.push({node: node.right, min: node.val, max})
        }
    }
    return true
}
