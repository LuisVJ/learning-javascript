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
}


g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Madrid");
g.addVertex("Madrid");
g.addVertex("Leon");
g.addVertex("Pucela");

g.addEdge("Tokyo", "Madrid");
g.addEdge("Pucela", "Madrid");
g.addEdge("Leon", "Madrid");

console.log(g);

g.removeVertex("Madrid");

console.log(g);