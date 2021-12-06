export class Node {
    name: string;
    children: Node[];
    visited?: boolean;

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }
}

export class Graph {
    nodes: Node[];

    clearVisited() {
        for(const n of this.nodes) {
            n.visited = false;
        }
    }
}

const undirectedGraph1 = new Graph();

const node7 = new Node("node7");
const node8 = new Node("node8");
const node9 = new Node("node9");
const node10 = new Node("node10");
const node11 = new Node("node11");
const node12 = new Node("node12");
const node13 = new Node("node13")

node7.children = [node8, node9];
node8.children = [node7, node9, node11];
node9.children = [node7, node8, node10];
node10.children = [node9];
node11.children = [node8, node12];
node12.children = [node11];
node13.children = [];

undirectedGraph1.nodes = [node7, node8, node9, node10, node11, node12, node13];
