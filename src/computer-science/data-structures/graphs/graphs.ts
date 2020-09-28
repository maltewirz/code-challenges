// A graph data structure consists of a finite (and possibly mutable)
// set of unordered pairs of these vertices for an undirected graph or 
// a set of ordered pairs for a directed graph.

// Graph: Nodes + Connections

// Graph Use Cases: Social Networks, Recommendation Engines,
// Location, Routing, Visual Hierarchy etc.

// Essential Graph Terms
// Vertex: a Node
// Edge: Connection between nodes
// Weighted/Unweighted: Values assigned to distances between vertices
// Directed/Undirected: Directions assigned to distances between vertices

// Graph stored in Matrix
// A - B - C - D - A

//    A  B  C  D
// A  0  1  0  1
// B  1  0  1  0
// C  0  1  0  1
// D  1  0  1  0

// Graph stored in Hash Map
// A - B - C - D - A

// {
// A: ["B", "D"],
// B: ["A", "C"],
// C: ["B", "D"],
// D: ["C", "A"],
// }

// Graph stored as Array
// 0 - 1 - 2 - 3 - 4 - 5
// [
// 0  [1,5],
// 1  [0,2], 
// 2  [1,3],
// 3  [2,4],
// 4  [3,5],
// 5  [4,0]   
// ]

// Adjacency List vs Matrix
// V: Vertices E: Edges
// Operation        Adjacency List  Adjacency matrix
// Add Vertex       O(1)            O(V^2)
// Add Edge         O(1)            O(1)
// Remove Vertex    O(V+E)          O(V^2)
// Remove Edge      O(E)            O(1)
// Query            O(V+E)          O(1)
// Storage          O(V+E)          O(V^2)

// List: 
// + Can take up less space in sparse graphs
// + Faster to iterate over all edges
// - Can be slower to lookup specific edge
// + Most real world data tends to lend itself to sparser or larger graphs

// Matrix:
// - Takes up more space in sparse graphs
// - Slower to iterate over all edges
// + Faster to lookup specific edge

// Undirected Graph

type graphType = {
    [key: string]: string[];
};

export class Graph {
    adjacencyList: graphType = {};
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex: string): void {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            if (adjacentVertex) {
                this.removeEdge(vertex, adjacentVertex);
            }
        }
        delete this.adjacencyList[vertex];
    }

}