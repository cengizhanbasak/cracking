import { test } from "./test";
import Node from "./Node";

const palindrome = (head: Node<number>): boolean => {
    let n = head;
    const nodes = [];
    while (n !== null) {
        nodes.push(n.data);
        n = n.next;
    }

    for (let p = 0; p < nodes.length; p++) {
        if (nodes[p] !== nodes[nodes.length - 1 - p]) {
            return false;
        }
    }
    return true;
};

const testCases = [
    { input: [Node.toLinkedList([1,2,3,2,1])], output: true },
    { input: [Node.toLinkedList([1,2,2,1])], output: true },
    { input: [Node.toLinkedList([1,2,3,4])], output: false },
];

test(palindrome, testCases);