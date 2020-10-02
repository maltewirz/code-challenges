import { WeightedGraph, PriorityQueue } from './dijkstra';

describe('WeightedGraph', () => {
    test('can be instanced', () => {
        const graph = new WeightedGraph();

        expect(graph instanceof WeightedGraph).toStrictEqual(true);
    });

    test('a vertex can be added', () => {
        const graph = new WeightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');

        graph.addEdge('A', 'B', 9);
        graph.addEdge('A', 'C', 5);
        graph.addEdge('B', 'C', 7);

        expect(graph.adjacencyList['A']).toStrictEqual([
            { node: 'B', weight: 9 },
            { node: 'C', weight: 5 },
        ]);
    });
});

describe('PriorityQueue', () => {
    test('can be instanced', () => {
        const queue = new PriorityQueue();
        expect(queue instanceof PriorityQueue).toStrictEqual(true);
    });

    test('a value can be enqueued', () => {
        const queue = new PriorityQueue();
        queue.enqueue('A', 1);
        queue.enqueue('B', 14);
        queue.enqueue('C', 5);

        expect(queue.values[0].val).toStrictEqual('A');
    });

    test('a value can be dequeued', () => {
        const queue = new PriorityQueue();
        queue.enqueue('A', 1);
        queue.enqueue('B', 14);
        queue.enqueue('C', 5);
        let dequeued = queue.dequeue().val;
        expect(dequeued).toStrictEqual('A');
        dequeued = queue.dequeue().val;
        expect(dequeued).toStrictEqual('C');
    });

    test('a queue can be sorted', () => {
        const queue = new PriorityQueue();
        queue.enqueue('B', 14);
        queue.enqueue('A', 1);
        queue.enqueue('C', 5);

        queue.sort();
        expect(queue.values[0].val).toStrictEqual('A');
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


