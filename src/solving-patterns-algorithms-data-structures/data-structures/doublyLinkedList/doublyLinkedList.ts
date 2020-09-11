// Doubly Linked List
// Almost identical to Singly Linked List, except every node has another pointer to the previous node
// Takes more memory for the extra pointer -> more flexibility
// Better for than Singly Linked Lists for finding nodes in half the time
// 

//         next     next     next
// null     ->       ->       ->    null
// <-    12      9      5      14   ->
//          <-       <-       <-
//         prev     prev     prev

// BIG O Notation
// Insertion + Removal: O(1)
// Searching + Access: O(N)

export class Node {
    val: number | undefined;
    next: Node | null;
    prev: Node | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: number): DoublyLinkedList {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): Node | null | undefined {
        if (!this.head) {
            return undefined;
        }
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (poppedNode && poppedNode.prev) {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(): Node | null | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (oldHead && oldHead.next) {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val: number): DoublyLinkedList {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.head) {
            this.head.prev = newNode;
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
        let count, current;
        // simple optimization to reduce looping time
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index && current) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index && current) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index: number, val: number): boolean {
        const searchNode = this.get(index);
        if (searchNode) {
            searchNode.val = val;
            return true;
        }
        return false;
    }

    insert(index: number, val: number): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }

        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        if (beforeNode && beforeNode.next) {
            const afterNode = beforeNode.next;
            (beforeNode.next = newNode), (newNode.prev = beforeNode);
            (newNode.next = afterNode), (afterNode.prev = newNode);
        }
        this.length++;
        return true;
    }

    remove(index: number): boolean | undefined | Node | null {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const removedNode = this.get(index);
        if (removedNode && removedNode.prev && removedNode.next) {
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }
}
