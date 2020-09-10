// #### Singly Linked Lists:
// * A data structure that contains a head, tail and length property.
// * Linked Lists consists of nodes, and each node has a value and a pointer to another node or null.
// * Each node is connected one-directionaly to the next node
// HEAD     LENGTH:4       TAIL
// 4   ->   6   ->  8   ->  2
//    NEXT     NEXT    NEXT

// #####  Lists: Walk the stairs to your position

// * Do not have indexes!
// * Connected via nodes with a next pointer
// * Random access is not allowed

// #### Arrays: Take the elevator to the position

// * Indexed in order!
// * Insertion and deletion can be expensive
// * Can quickyl be accessed at a specific index

// #### Big O Notation
// * Insertion O(1)
// * Removal O(1) or O (n)
// * Searching O(n)
// * Access O(n)

// ### Summary

// * Singly Linked Lists are an excellent alternative to arrays when optimizing for insertion and deletion at the beginning are often required.
// * Arrays contain a built in index whereas Linked Lists do not
// * The idea of a list data structure that consists of nodes is a the foundation for other data structures like stacks and queues.

export class Node {
    val: number;
    next: Node | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList {
    head: null | Node;
    tail: null | Node;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: number): SinglyLinkedList {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): Node | undefined {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = this.head;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(): Node | undefined {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val: number): SinglyLinkedList {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index: number): Node | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;

        while (counter !== index && current) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index: number, val: number): boolean {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index: number, val: number): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        if (prev) {
            const temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
        }
        this.length++;
        return true;
    }

    remove(index: number): Node | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const previousNode = this.get(index - 1);
        let removed;
        if (previousNode && previousNode.next) {
            removed = previousNode.next;
            previousNode.next = removed.next;
        }
        this.length--;
        return removed;
    }

    print(): number[] {
        const arr: number[] = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    reverse(): SinglyLinkedList {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        
        for (let i = 0; i < this.length; i++) {
            if (node) {
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
        }
        return this;
    }
}
