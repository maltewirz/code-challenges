// Binary Heap
// Very similar to a binary search tree. Used to implement priority queues, which are common.
// They are also used often with graph traversal algorithms.

// ## MaxBinaryHeap:
// * Parent nodes have max of 2 children
// * Parent nodes are always larger than child nodes
// * Binary Heap is as compact as possible. 
// * All children are as full as they can be and left children are filled first.
// * No implied ordering between siblings

// ## MinBinaryHeap: Parent nodes are always smaller than child nodes

// Example:
//          41
//     39         33
//  18    27     12

// Representing a heap as array:
// [41,    39,     33,    18,    27,    12]
// Parent  Left   Right
//         Parent         Left   Right
//               Parent                 Left                                     

// For any index of an array n
// The left child is stored at 2n + 1
// The right child is at 2n + 2

// For any child node at index n, its parent is at index (n-1)/2 (floored)

export class Node {
    val: number | undefined;
    left: Node | null;
    right: Node | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class MaxBinaryHeap {
    values: number[];
    constructor() {
        this.values = [];
    }
}
