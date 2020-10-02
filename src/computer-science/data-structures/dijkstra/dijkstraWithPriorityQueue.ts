export class Node {
    val: string | number;
    priority: number;
    constructor(val: string | number, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}

export class PriorityQueue {
    values: Node[];
    constructor() {
        this.values = [];
    }
    enqueue(val: string | number, priority: number): void {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(): Node {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0 && end) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(): void {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (leftChild &&
                        swap !== null &&
                        rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

type GraphType = {
    [key: string]: { node: string; weight: number }[];
};

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

    Dijkstra(start: string, finish: string): (string | number)[] | undefined {
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
                while (smallest !== null && previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
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
        if (smallest) {
            path.push(smallest);
            return path.reverse();
        }
    }
}
