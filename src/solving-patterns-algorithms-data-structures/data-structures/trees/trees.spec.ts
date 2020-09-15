import { Node, BinarySearchTree } from './trees';

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
});
