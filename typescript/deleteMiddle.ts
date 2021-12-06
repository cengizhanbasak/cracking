import { test } from "./test";
import Node from "./Node";

const deleteMiddle = (n: Node<number>): void => {
    n.data = n.next.data;
    n.next = n.next.next;
};

const ll1 = Node.toLinkedList([1,1,2,2,3,3]);
deleteMiddle(ll1.next);
const ll2 = Node.toLinkedList([1,2,3,4,5])
deleteMiddle(ll2.next.next);
const testCases = [
    {
        input: [ll1],
        output: "1, 2, 2, 3, 3"
    },
    {
        input: [ll2],
        output: "1, 2, 4, 5"
    },
];

test(Node.toString, testCases);