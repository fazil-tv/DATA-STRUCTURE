class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();
        }
    }

    removeVertex(vertex) {
        for (const val of this.list[vertex]) {
            this.remove(vertex, val);
        }
    }

    addEdge(vertex, edge) {
        this.addVertex(vertex);
        this.addVertex(edge);
        this.list[vertex].add(edge);
        // Bidirectional
        // this.list[edge].add(vertex); 
    }

    remove(vertex, edge) {
        this.list[vertex].delete(edge);
         // Bidirectional
        // this.list[edge].delete(vertex);
    }

    display() {
        for (const values in this.list) {
            console.log(values + "--->" + [...this.list[values]]);
        }
    }

    findLargestKey() {
        let max = 0;
        let largest = null;
        for (let value in this.list) {
            const count = this.list[value].size;
            if (count > max) {
                max = count;
                largest = value;
            }
        }
        return largest;
    }

    dfs(start) {
        let stack = [];
        let visited = {};
        stack.push(start);

        while (stack.length) {
            let vertex = stack.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                console.log("visited", vertex);
                let nearData = this.list[vertex];

                for (let val of nearData) {
                    if (!visited[val]) {
                        stack.push(val);
                    }
                }
            }
        }
    }

    bfs(start) {
        let queue = [];
        let visited = {};
        visited[start] = true;
        queue.push(start);

        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
            let nearData = this.list[vertex];
            for (const value of nearData) {
                if (!visited[value]) {
                    visited[value] = true;
                    queue.push(value);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex(30);
graph.addVertex(40);
graph.addEdge(40, 25);
graph.addEdge(40, 75);
graph.addEdge(40, 45);
graph.addEdge(40, 80);
graph.addEdge(80, 63);
graph.addEdge(63, 43);
graph.addEdge(80, 90);
graph.addEdge(90, 17);
graph.addEdge(17, 29);
graph.addEdge(29, 40);

console.log(graph.findLargestKey());
graph.display();
// graph.dfs(40)
graph.bfs(40);
