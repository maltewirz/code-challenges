import { WeightedGraph } from './dijkstra';

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
        // console.log(graph.adjacencyList);

        expect(graph.adjacencyList['A']).toStrictEqual([
            { node: 'B', weight: 9 },
            { node: 'C', weight: 5 },
        ]);
    });
});
