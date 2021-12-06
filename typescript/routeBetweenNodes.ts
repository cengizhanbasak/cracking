import { Node, Graph } from "./Graph";
import { Queue } from "./Queue";
import { test } from "./test";

const routeBetweenNodes = (from: Node, to: Node): boolean => {
    const q = new Queue<Node>();
    q.enqueue(from);
    from.visited = true;
    while (!q.isEmpty()) {
        const currNode = q.dequeue();
        if (currNode === to) {
            return true;
        }
        for(const c of currNode.children) {
            if (!c.visited) {
                q.enqueue(c);
                c.visited = true;
            }
        }
    }
    return false;
}


const directedGraph1 = new Graph();

const node1 = new Node("node1");
const node2 = new Node("node2");
const node3 = new Node("node3");
const node4 = new Node("node4");
const node5 = new Node("node5");
const node6 = new Node("node6");

node1.children = [node2, node3];
node2.children = [node4, node5];
node3.children = [node2];
node4.children = [node5];
node5.children = [];
node6.children = [node5];

directedGraph1.nodes = [node1, node2, node3, node4, node5, node6];

const testCases = [
    { input: [directedGraph1.nodes[0], directedGraph1.nodes[5]], output: false },
    { input: [directedGraph1.nodes[0], directedGraph1.nodes[4]], output: true }
];

test(routeBetweenNodes, testCases, { copy: false, beforeEach: directedGraph1.clearVisited.bind(directedGraph1) });