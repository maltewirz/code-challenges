// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

//    Tree:
//         3
//      9     20
//          15   7

import { TreeNode } from './ITreeNode';

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

function maxDepthRecursive(root: TreeNode | null): number {
    if (root == null) {
        return 0;
    }

    const left = maxDepthRecursive(root.left);
    const right = maxDepthRecursive(root.right);

    return Math.max(left, right) + 1;
}

function maxDepthIterative(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const queue = [root]
    let depth = 0;

    while (queue.length !== 0) {
        const len = queue.length;
        // run for loop as long as queue has items
        for (let i = 0; i < len; i++) {
            // extract the first item of the queue
            const item = queue.shift()
            // if item has left child, add this to queue
            if (item.left) {
                queue.push(item.left);
            }
            // if item has right child, add this to queue
            if (item.right) {
                queue.push(item.right)
            }
        }
        depth++;
    }
    return depth;
}
