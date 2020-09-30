// # Dijkstras Algorithm:

// * Most famous and widely used alorithm: GPS, Network Routing, Epidemic spreading.
// * Finds the shortest path between two vertices on a graph
// * Whats the fastest way to get from point A to point B?

type GraphType = {
    [key: string]: {node: string, weight: number}[] 
}

export class WeightedGraph {
    adjacencyList: GraphType = {}
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}
