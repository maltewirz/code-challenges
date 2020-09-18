import { Node, PriorityQueue } from './priorityQueue';

describe('PriorityQueue', () => {

    test('Node Class can be instantiated', () => {
        const node = new Node(13,1);
        expect(node instanceof Node).toStrictEqual(true);
    });

    test('PriorityQueue Class can be instantiated', () => {
        const pQueue = new PriorityQueue();
        expect(pQueue instanceof PriorityQueue).toStrictEqual(true);
    });

    test('values can be enqueued', () => {
        const pQueue = new PriorityQueue();
        pQueue.enqueue(39,3);
        pQueue.enqueue(41,1);
        expect(pQueue.values.length).toStrictEqual(2);
    });

    test('values are bubbled up', () => {
        const pQueue = new PriorityQueue();
        pQueue.enqueue(39,3);
        pQueue.enqueue(41,1);
        expect(pQueue.values[0].val).toStrictEqual(41);
    });

    test('values can be dequeued', () => {
        const pQueue = new PriorityQueue();
        pQueue.enqueue(39,3);
        pQueue.enqueue(41,1);
        pQueue.enqueue(5,8);
        expect(pQueue.values.length).toStrictEqual(3);        
    });

    test('values can be sunk down', () => {
        const pQueue = new PriorityQueue();
        pQueue.enqueue(39,3);
        pQueue.enqueue(41,1);
        pQueue.enqueue(5,8);        
        expect(pQueue.dequeue().val).toStrictEqual(41);
    });

});
