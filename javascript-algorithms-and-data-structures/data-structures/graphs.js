// Vertex - a node
// Edge - connection between nodes
// Undirected graph - There is no direction asociated with an edge
// Directed graph - edges have directions
// Weighted graph - edges have values (weights - distance, priority...)

// Implementation of an undirected graph:

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
        let x = this.adjacencyList[v1].indexOf(v2);
        if (x > -1 )this.adjacencyList[v1].splice(x, 1);
        let y = this.adjacencyList[v2].indexOf(v1);
        if (y > -1 ) this.adjacencyList[v2].splice(y, 1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const v = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, v);
        }
        delete this.adjacencyList[vertex];
    }

    DFS(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        function recursiveDFS(vertex){
            result.push(vertex);
            visited[vertex] = true;
            for (let v of adjacencyList[vertex]) {
                if (!visited[v]){
                    recursiveDFS(v);
                } 
            };
        }
        recursiveDFS(start)

        return result;
    }

    DFS_iterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neigbor => {
                if (!visited[neigbor]){
                    visited[neigbor] = true;
                    stack.push(neigbor);
                }
            });
        }
        return result;
    }

    BFS(start){
        let queue = [start];
        let result = [];
        let visited = {};
        let currentVertex;

        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neigbor => {
                if (!visited[neigbor]){
                    visited[neigbor] = true;
                    queue.push(neigbor);
                }
            });
        }
        return result;
    }
}


g = new Graph();

// g.addVertex("Tokyo");
// g.addVertex("Madrid");
// g.addVertex("Madrid");
// g.addVertex("Leon");
// g.addVertex("Pucela");

// g.addEdge("Tokyo", "Madrid");
// g.addEdge("Pucela", "Madrid");
// g.addEdge("Leon", "Madrid");

// console.log(g);

// g.removeVertex("Madrid");

// console.log(g);

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g)

console.log(g.DFS("A"))
console.log(g.DFS_iterative("A"))
console.log(g.BFS("A"))