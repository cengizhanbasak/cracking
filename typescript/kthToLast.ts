import { test } from "./test";
import Node from "./Node";

const kthToLast = (head: Node<number>, k: number): number => {
    let forward = head;
    let n = head;
    while (k > 0) {
        forward = forward.next;
        k--;
    }
    while (forward.next !== null) {
        forward = forward.next;
        n = n.next;
    }
    return n.data;
};

const testCases = [
    { input: [Node.toLinkedList([1,2,3,4]), 3], output: 1 },
    { input: [Node.toLinkedList([1,2,3,4]), 1], output: 3 },
    { input: [Node.toLinkedList([1,2,3,4]), 0], output: 4 },
];

test(kthToLast, testCases);