// #### Tree
// A data structure that consists of node in a parent / child relationship

// Tree:
// ```ts
//         2
//     9 12 8 99    10
// 2   1,7,2    11     55,97
// ```

// Not a tree: (can't have a sibling point to sibling)
// ```ts
//     2
// 9   ->  8
// ```
// Trees have one entry point and then go downwards

// Lists - linear
// Trees - nonlinear

// #### Terminology
// * Root: Top node in a tree
// * Child: A node directly connected to another node when moving away from the Root
// * Parent: The converse notion of a child
// * Siblings: A group of nodes with the same parent
// * Leaf - A node with no children
// * Edge - The connection between one node and another

// #### Trees Examples
// * HTML DOM
// * Network Routing
// * Abstract Syntax Tree
// * Artificial Intelligence
// * Folders in Operating System

// #### Kinds of Trees
// * Trees
// * Binary Trees
// * Binary Search Trees (BST)

// #### Binary Trees
// Can have 0, 1 or 2 children - not more.

// ```ts
//         1
//     4       8
// 1,9             10
// ```

// #### Binary Search Tree
// * Every parent node has at most two children
// * Every node to the left of a parent node is always less than a parent
// * Every node to the right of a parent node is always greater than the parent

// ```ts
//             41
//     20              65
// 11     29       50        91
// ```

//  #### Big O Notation
//  * Insertion O(log n)
//  * Searching O(log n)

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

    // Tree Traversal

    //      10
    //   19       6
    // 99 8         20

    // Two ways of traversing a tree:
    // * Breadth-first Search:
    // ->      10
    // ->  19       6
    // -> 99 8         20

    // * Depth-first Search
    // Used commonly with Binary Search trees.
    // ↓     10
    // ↓  19       6
    // ↓ 99 8         20

     // * Depth-first Search -Pre order:
     // Used to export a tree structure so that it is 
     // easily reconstructed or copied.

    binaryFirstSearch(): number[] {
        const queue = [];
        const visited: number[] = [];
        queue.push(this.root);
        while (queue.length !== 0) {
            const visitedValue = queue.shift();
            if (visitedValue) {
                visited.push(visitedValue.value);
                if (visitedValue.left) {
                    queue.push(visitedValue.left);
                }
                if (visitedValue.right) {
                    queue.push(visitedValue.right);
                }
            }
        }
        return visited;
    }

    depthFirstSearchPreOrder(): number[] {
        const visited: number[] = [];
        function helperDepth(node: Node) {
            visited.push(node.value);
            if (node.left) {
                helperDepth(node.left);
            }
            if (node.right) {
                helperDepth(node.right);
            }
        }
        if (this.root) {
            helperDepth(this.root);
        }
        return visited;
    }

    depthFirstSearchPostOrder(): number[] {
        const visited: number[] = [];
        function helperDepth(node: Node) {
            if (node.left) {
                helperDepth(node.left);
            }
            if (node.right) {
                helperDepth(node.right);
            }
            visited.push(node.value);
        }
        if (this.root) {
            helperDepth(this.root);
        }
        return visited;
    }

    depthFirstSearchInOrder(): number[] {
        const visited: number[] = [];
        function helperDepth(node: Node) {
            if (node.left) {
                helperDepth(node.left);
            }
            visited.push(node.value);
            if (node.right) {
                helperDepth(node.right);
            }
        }
        if (this.root) {
            helperDepth(this.root);
        }
        return visited;
    }
}
