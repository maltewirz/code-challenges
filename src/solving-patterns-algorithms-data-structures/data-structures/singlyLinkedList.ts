// Singly Linked Lists Example:
// HEAD     LENGTH:4       TAIL
// 4   ->   6   ->  8   ->  2
//    NEXT     NEXT    NEXT


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
            this.tail = this.head;
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
        let newTail = current;

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
}
