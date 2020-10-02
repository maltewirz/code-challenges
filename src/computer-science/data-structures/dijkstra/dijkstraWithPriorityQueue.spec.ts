import { Node, PriorityQueue, WeightedGraph} from './dijkstraWithPriorityQueue';

describe('PriorityQueue', () => {

    test('Node Class can be instantiated', () => {
        const node = new Node('A',1);
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



describe('Dijkstra Algorithm', () => {
    test('Weighted Graph', () => {
        const graph = new WeightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        
        graph.addEdge('A', 'B', 4);
        graph.addEdge('A', 'C', 2);
        graph.addEdge('B', 'E', 3);
        graph.addEdge('C', 'D', 2);
        graph.addEdge('C', 'F', 4);
        graph.addEdge('D', 'E', 3);
        graph.addEdge('D', 'F', 1);
        graph.addEdge('E', 'F', 1);

        expect(graph.Dijkstra('A', 'E')).toStrictEqual( [ 'A', 'C', 'D', 'F', 'E' ]);
    })
})
