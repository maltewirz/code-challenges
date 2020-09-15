import { AsyncLocalStorage } from 'async_hooks';

export class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }

    insert(value: number): BinarySearchTree | undefined {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        // es-lint ignore
        while (true) {
            if (value === current.value) {
                return undefined;
            }
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }

    contains(value: number): boolean {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (value > current.value) {
                if (current.right) {
                    current = current.right;
                }
            } else if (value < current.value) {
                if (current.left) {
                    current = current.left;
                }
            } else {
                return true;
            }
        }
        return false;
    }
}
