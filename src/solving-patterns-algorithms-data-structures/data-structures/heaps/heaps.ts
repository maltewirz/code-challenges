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

// Priority Queue: 
// Data Structure where each element has a priority. Elements with higher priorities
// are served before elements with lower priorities.

export class MaxBinaryHeap {
    values: number[];
    constructor() {
        this.values = [];
    }

    insert(element: number): void {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (element <= parent) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(): number {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(): void {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;

            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (rightChild > element && swap === null) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) {
                break;
            }

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap
        }
    }
}
