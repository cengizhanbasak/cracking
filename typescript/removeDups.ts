import { test } from "./test";
import Node from "./Node";

const removeDups = (head: Node<number>): Node<number> => {
    const elements:Record<number, boolean> = {};
    let curr = head;
    let prev = null;
    while (curr !== null) {
        if (elements[curr.data] === true) {
            prev.next = curr.next;
        } else {
            elements[curr.data] = true;
        }

        prev = curr;
        curr = curr.next
    }
    return head;
};

const testCases = [
    { input: [removeDups(Node.toLinkedList([1,1,2,2,3,3]))], output: "1, 2, 3" },
    { input: [removeDups(Node.toLinkedList([1,2,3,4]))], output: "1, 2, 3, 4" },
];

test(Node.toString, testCases);