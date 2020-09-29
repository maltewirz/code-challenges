import { Graph } from './graphs';

describe('Graphs', () => {
    test('can be instanced', () => {
        const graph = new Graph();

        expect(graph instanceof Graph).toStrictEqual(true);
    });

    test('a vertex can be added', () => {
        const graph = new Graph();
        graph.addVertex('Tokyo');
        expect(graph.adjacencyList['Tokyo']).toStrictEqual([]);
    });

    test('an edge can be added', () => {
        const graph = new Graph();
        graph.addVertex('Tokyo');
        graph.addVertex('Dallas');
        graph.addVertex('Aspen');

        graph.addEdge('Tokyo', 'Dallas');
        expect(graph.adjacencyList['Tokyo']).toStrictEqual(['Dallas']);
        expect(graph.adjacencyList['Dallas']).toStrictEqual(['Tokyo']);

        graph.addEdge('Dallas', 'Aspen');
        expect(graph.adjacencyList['Dallas']).toStrictEqual(['Tokyo', 'Aspen']);
    });

    test('an edge can be removed', () => {
        const graph = new Graph();
        graph.addVertex('Tokyo');
        graph.addVertex('Dallas');
        graph.addVertex('Aspen');

        graph.addEdge('Tokyo', 'Dallas');
        graph.addEdge('Dallas', 'Aspen');

        graph.removeEdge('Dallas', 'Aspen');
        expect(graph.adjacencyList['Dallas']).toStrictEqual(['Tokyo']);
    });

    test('an vertex can be removed', () => {
        const graph = new Graph();
        graph.addVertex('Tokyo');
        graph.addVertex('Dallas');
        graph.addVertex('Aspen');

        graph.addEdge('Tokyo', 'Dallas');
        graph.addEdge('Dallas', 'Aspen');

        graph.removeVertex('Dallas');
        expect(graph.adjacencyList['Dallas']).toStrictEqual(undefined);
    });

    test('depth first search (dfs) recursive traversal', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');

        expect(graph.depthFirstRecursive('A')).toStrictEqual([
            'A',
            'B',
            'D',
            'E',
            'C',
            'F',
        ]);
    });

    test('depth first search (dfs) iterative traversal', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');
        expect(graph.depthFirstIterative('A')).toStrictEqual([
            'A',
            'C',
            'E',
            'F',
            'D',
            'B',
        ]);
    });

    test('breadth first search (bfs) iterative traversal', () => {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');

        expect(graph.breadthFirstIterative('A')).toStrictEqual([
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
        ]);
    });
});
