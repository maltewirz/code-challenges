export class Node {
    val: number;
    priority: number;
    constructor(val: number, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}

export class PriorityQueue {
    values: Node[];
    constructor() {
        this.values = [];
    }
    enqueue(val: number, priority: number): void {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(): Node {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0 && end) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(): void {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (leftChild &&
                        swap !== null &&
                        rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
