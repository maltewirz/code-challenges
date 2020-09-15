#### Tree
A data structure that consists of node in a parent / child relationship

Tree:
```ts
        2
    9 12 8 99    10
2   1,7,2    11     55,97
```

Not a tree: (can't have a sibling point to sibling)
```ts
    2
9   ->  8
```
Trees have one entry point and then go downwards

Lists - linear
Trees - nonlinear

#### Terminology
* Root: Top node in a tree
* Child: A node directly connected to another node when moving away from the Root
* Parent: The converse notion of a child
* Siblings: A group of nodes with the same parent
* Leaf - A node with no children
* Edge - The connection between one node and another

#### Trees Examples
* HTML DOM
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence
* Folders in Operating System


#### Kinds of Trees
* Trees
* Binary Trees
* Binary Search Trees (BST)

#### Binary Trees 
Can have 0, 1 or 2 children - not more.

```ts 
        1
    4       8
1,9             10
```

#### Binary Search Tree
* Every parent node has at most two children
* Every node to the left of a parent node is always less than a parent
* Every node to the right of a parent node is always greater than the parent

```ts
            41
    20              65
11     29       50        91
```

