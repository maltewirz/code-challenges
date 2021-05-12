// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

import { TreeNode } from './ITreeNode';

function levelOrder(root: TreeNode | undefined | null): number[][] {
  if (!root) {
      return []
  }

  const queue = []
  queue.push(root);
  const result = []
  while (queue.length > 0) {
      const temp = []
      const size = queue.length
      for (let i = 0; i < size; i++) {
          const node = queue.shift();
          temp.push(node.val);
          if (node.left) {
              queue.push(node.left)
          }
          if (node.right) {
              queue.push(node.right)
          }
      }
      result.push(temp)
  }
  return result
}

// travel through tree using breadth-first-search

// [1,2,3,4,null,null,5]
//             1
//         2       3
//     4     null   null   5


// Input:
// [1,2,3,4,null,null,5]
// Expected:
// [[1],[2,3],[4,5]]

// var levelOrder = function(root) {
//     if(!root) return [];
//     const results = [];
//     let queue = [root];
    
//     while(queue.length){
//         const level = [];
//         const newQueue = [];
//         for(const node of queue){
//             level.push(node.val);
//             if(node.left) newQueue.push(node.left);
//             if(node.right) newQueue.push(node.right);
//         }
//         results.push(level);
//         queue = newQueue;
//     }
//     return results;
// }