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
    // if the node does not exist, simply return 0.
    if (root == null) {
        return 0;
    }
    // Otherwise, return the +1 longer distance of its subtree.
    const left = maxDepthRecursive(root.left);
    const right = maxDepthRecursive(root.right);

    return Math.max(left, right) + 1;
}

function maxDepthIterative(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const queue = [root];
    let depth = 0;

    while (queue.length !== 0) {
        const len = queue.length;
        // run for loop as long as queue has items
        for (let i = 0; i < len; i++) {
            // extract the first item of the queue
            const item = queue.shift();
            // if item has left child, add this to queue
            if (item.left) {
                queue.push(item.left);
            }
            // if item has right child, add this to queue
            if (item.right) {
                queue.push(item.right);
            }
        }
        depth++;
    }
    return depth;
}

// Manual:
// Queue: [ [3,9,20,null,null,15,7] ] - Länge 1
// Tiefe 1

// for loop von 0 bis 1 -> *3* und 9 (nächste)
// für index 0 (3): hat kinder 9 und 20 -> beide in queue gepusht. [ [9], [20] ]
// für index 1 (9): keine kinder - nichts in queue gepusht

// for loop von 0 bis 2 -> *9*, *20* und ?
// für index 0 (9): keine kinder, [20]
// für index 1 (20): kinder 15 und 7 -> beides in queue gepsuht [[15],[7]]
// für index 2 (15): keinde kinder, [7]

// for loop von 0 bis 1 -> *7* und []
// für index 0 (7): keine kinder
// für index 1 (): keine kinder

function maxDepthIterative2(root: TreeNode | null): number {
    const queue: {
        node: TreeNode | null;
        depth: number;
    }[] = [{ node: root, depth: 1 }];
    let current = fringe.pop()
    let max = 0;

    while (current && current.node) {
        let node = current.nodes

        if (node.left) {
            queue.push({node: node.left, depth: current.depth +1})
        }
        if (node.right) {
            queue.push({node: node.right, depth: current.depth +1})
        }
    }
}
