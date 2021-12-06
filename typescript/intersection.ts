import { test } from "./test";
import Node from "./Node";

const intersection = (head1: Node<number>, head2: Node<number>): boolean => {
    while (head1.next !== null) {
        head1 = head1.next;
    }
    while (head2.next !== null) {
        head2 = head2.next;
    }
    return head1 === head2;
};

const ll1 = Node.toLinkedList([1,2,3,2,1]);
const ll2 = Node.toLinkedList([1,2,3]);
ll2.next.next.next = ll1.next.next;
const testCases = [
    { input: [ll1, ll1.next.next], output: true },
    { input: [ll1, ll2], output: true },
    { input: [Node.toLinkedList([1,2]), Node.toLinkedList([3,4])], output: false },
];

test(intersection, testCases);