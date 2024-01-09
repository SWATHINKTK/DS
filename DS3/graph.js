class Graph{
    constructor(){
        this.vertices = new Map();
    }

    addVertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex, new Set());
        }
    }

    addEdge(vertex1, vertex2, bidirected = false){
        if(!this.vertices.has(vertex1)){
            this.addVertex(vertex1);
        }

        if(!this.vertices.has(vertex2)){
            this.addVertex(vertex2);
        }

        this.vertices.get(vertex1).add(vertex2);

        if(bidirected){
            this.vertices.get(vertex2).add(vertex1);
        }
    }

    print(){
        for(const [keys,values] of this.vertices){
            console.log(keys, ":" ,[...values])
        }
    }

    deleteEdge(vertex1,vertex2){
        if(!this.vertices.has(vertex1) && !this.vertices.has(vertex2)){
            return;
        }
        this.vertices.get(vertex1).delete(vertex2);
        this.vertices.get(vertex2).has(vertex1) ? this.vertices.get(vertex2).delete(vertex2) : '';
    }

    deleteVertex(vertex){
        this.vertices.delete(vertex);
        for(let [vertices,neighbour] of this.vertices){
            neighbour.delete(vertex);
        }
    }

    bfs(vertex ,result = []){
        if(!this.vertices.has(vertex)){
            console.log("Vertex is Not Found.")
        }
        // const result = []

        const visited = new Set();
        const queue = [vertex];
        visited.add(vertex);

        while(queue.length > 0){
            const currentVertex = queue.shift();
            // console.log(currentVertex," -> ")
            if(!result.includes(currentVertex)){
                result.push(currentVertex)
                result.push("->")
            }

            for(const neighbour of this.vertices.get(currentVertex)){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                    visited.add(neighbour);
                }
            }
        }

        for(const [key,values] of this.vertices){
            if(!result.includes(key)){
                this.bfs(key,result)
            }
        }
        return result;
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


console.log('BFS traversal')
console.log(...graph.bfs(1))

