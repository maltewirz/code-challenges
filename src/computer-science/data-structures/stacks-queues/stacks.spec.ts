import { Node, Stack } from './stacks';

describe('Stack', () => {
    test('instantiate a Node', () => {
        const node = new Node(5);
        expect(node instanceof Node).toStrictEqual(true);
    });
    test('instantiate a Stack', () => {
        const list = new Stack();
        expect(list instanceof Stack).toStrictEqual(true);
    });

    test('push a value to the Stack', () => {
        const list = new Stack();
        list.push(1);
        list.push(2);
        expect(list.size).toStrictEqual(2);
    });

    test('pop a value from the Stack', () => {
        const list = new Stack();
        list.push(1);
        list.push(2);
        list.pop();
        expect(list.size).toStrictEqual(1);
    });
});
