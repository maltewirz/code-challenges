import { Node, Queue } from './queues';

describe('Stack', () => {
    test('instantiate a Node', () => {
        const node = new Node(5);
        expect(node instanceof Node).toStrictEqual(true);
    });
    test('instantiate a Stack', () => {
        const list = new Queue();
        expect(list instanceof Queue).toStrictEqual(true);
    });

    test('push a value to the Stack', () => {
        const list = new Queue();
        list.enqueue(1);
        list.enqueue(2);
        expect(list.size).toStrictEqual(2);
    });

    test('pop a value from the Stack', () => {
        const list = new Queue();
        list.enqueue(1);
        list.enqueue(2);
        list.dequeue();
        expect(list.size).toStrictEqual(1);
    });
});
