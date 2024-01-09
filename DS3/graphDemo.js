class Graph{
    constructor(){
        this.vertices = new Map();
    }

    addVertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex,new Set());
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.vertices.has(vertex1)){
            this.vertices.set(vertex1,new Set());
        }

        if(!this.vertices.has(vertex2)){
            this.vertices.set(vertex2,new Set());
        }

        this.vertices.get(vertex1).add(vertex2);
    }

    bfs(vertex,result = []){
        const queue = [vertex];
        const visited = new Set();
        visited.add(vertex);
        while(queue.length > 0){
            const node = queue.shift();
            result.push(node)
            for(let neighbour of this.vertices.get(node)){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                    queue.add(neighbour)
                }
            }
        }
    }

    dfs(vertex,visited = new Set()){
        console.log(vertex);
        visited.add(vertex);
        const neighbours = this.vertices.get(vertex);
        for(let neighbour of neighbours){
            this.dfs(neighbour,visited)
        }
    }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1,0)
graph.addEdge(0,3)
graph.addEdge(2,1)
graph.addEdge(4,0)
graph.addEdge(3,4)
graph.addEdge(2,6)
graph.addEdge(5,6)

console.log(graph.vertices)
