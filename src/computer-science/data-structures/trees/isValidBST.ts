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

function isValidBST(root: TreeNode | null): boolean | number {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root: TreeNode | null, min: number | null, max: number | null): any {
        if (!root) {
            return true; // We hit the end of the path
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }
        
        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    
    return helper(root, null, null);
}


// function isValidBST2(root: TreeNode, min=null, max=null): boolean | number {
//     if (!root) return true;
//     if (min && root.val <= min.val) return false;
//     if (max && root.val >= max.val) return false;
//     return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
// }

// get currentNode, is currentNode.left smaller and currentNode.right greater? - if not, return false
//


            //     5
            // 4       6
            //       3   7