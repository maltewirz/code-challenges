// Queues: Adding and removing of data
// FIFO - First in First Out
// Used for Background Tasks, Uploading, Printing

// // Queue with array:
// let q = [];

// q.push('FIRST')
// q.push('Second')
// q.push('third')

// q // first, second, third

// q.shift() // first
// q.shift() // second
// q.shift() // third

// let q  = []
// q.unshift('FIRST')
// q.unshift('Second')
// q.unshift('third')

// q.pop() // first
// q.pop() // second
// q.pop() // third

// This again does not scale since it requires reindexing the array,
// therefore more efficient to solve it using a class:

// #### Big O Notation
// * Insertion O(1)  <- Important!
// * Removal O(1)   <- Important!
// * Searching O(n)
// * Access O(n)


export class Node {
    value: number;
    next: Node | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export class Queue {
    first: Node | null;
    last: Node | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val: number): number {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else if (this.last) {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(): number | null  {
        if (!this.first) {
            return null;
        }

        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
