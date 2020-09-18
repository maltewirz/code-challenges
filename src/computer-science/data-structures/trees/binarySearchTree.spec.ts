// @ts-nocheck
import { Node, BinarySearchTree } from './binarySearchTree';

describe('BinarySearchTree', () => {
    test('instantiate a Node', () => {
        const node = new Node(5);
        expect(node instanceof Node).toStrictEqual(true);
    });
    test('instantiate a BinarySearchTree', () => {
        const tree = new BinarySearchTree();
        expect(tree instanceof BinarySearchTree).toStrictEqual(true);
    });

    test('insert a value', () => {
        const tree = new BinarySearchTree();
        tree.insert(3);
        tree.insert(4);
        expect(tree.root.right.value).toStrictEqual(4);
    });

    test('contains a value', () => {
        const tree = new BinarySearchTree();
        tree.insert(3);
        tree.insert(4);
        tree.insert(34);
        tree.insert(22);
        tree.insert(2);
        tree.insert(7);
        expect(tree.contains(2)).toStrictEqual(true);
    });

    test('binaryFirstSearch the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(6);
        tree.insert(15);
        tree.insert(3);
        tree.insert(8);
        tree.insert(20);
        expect(tree.binaryFirstSearch()).toStrictEqual([10, 6, 15, 3, 8, 20]);
    });

    test('depthFirstSearchPreOrder the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(6);
        tree.insert(15);
        tree.insert(3);
        tree.insert(8);
        tree.insert(20);
        expect(tree.depthFirstSearchPreOrder()).toStrictEqual([10, 6, 3, 8, 15, 20]);
    });

    test('depthFirstSearchPostOrder the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(6);
        tree.insert(15);
        tree.insert(3);
        tree.insert(8);
        tree.insert(20);
        expect(tree.depthFirstSearchPostOrder()).toStrictEqual([3,8,6,20,15,10]);
    });

    test('depthFirstSearchInOrder the tree', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(6);
        tree.insert(15);
        tree.insert(3);
        tree.insert(8);
        tree.insert(20);
        expect(tree.depthFirstSearchInOrder()).toStrictEqual([3,6,8,10,15,20]);
    });
});
