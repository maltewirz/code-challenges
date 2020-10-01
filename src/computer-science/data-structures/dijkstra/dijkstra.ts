// # Dijkstras Algorithm:

// * Most famous and widely used alorithm: GPS, Network Routing, Epidemic spreading.
// * Finds the shortest path between two vertices on a graph
// * Whats the fastest way to get from point A to point B?

// ## The approach
// 1. Every time we visit a new node, we pick the node
// with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit,
// we look at each of its neighbors
// 3. For each neighboring node, we calculate the distance
// by summing the total edges that lead to the node we're
// checking from the starting node.
// 4. If the new total distance to a node is less than the
// previous total, we store the new shorter distance
// for that node.

type QueueValue = { val: string; priority: number };
type QueueValues = QueueValue[];
type GraphType = {
    [key: string]: { node: string; weight: number }[];
};

export class PriorityQueue {
    values: QueueValues;
    constructor() {
        this.values = [];
    }

    enqueue(val: string, priority: number): void {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue(): QueueValue | undefined {
        return this.values.shift();
    }

    sort(): void {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

export class WeightedGraph {
    adjacencyList: GraphType = {};
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start: string, finish: string): string[] {
        const nodes = new PriorityQueue();
        const distances: { [key: string]: number } = {};
        const previous: { [key: string]: number | null | string } = {};
        const path = []; // to return at end
        let smallest;
        // build up initial state
        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit

        while (nodes.values.length) {
            const dequeuedNode = nodes.dequeue();
            if (dequeuedNode) {
                smallest = dequeuedNode.val;
            }
            if (smallest === finish) {
                // We are done, build up path to return at end

                while(smallest !== null && previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
            }
            if (smallest || (smallest && distances[smallest] !== Infinity)) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    const nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    const candidate = distances[smallest] + nextNode.weight;
                    const nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }        
        return path.concat(smallest).reverse();
    }
}
