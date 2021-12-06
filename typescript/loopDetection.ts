import { test } from "./test";
import Node from "./Node";

const loopDetection = (head: Node<number>): boolean => {
    if (!head) {
        return false;
    }
    let tortoise = head;
    let hare = head.next;
    while (hare !== null) {
        if (hare === tortoise) {
            return true;
        }
        hare = hare.next;
        if (hare === null) {
            break;
        }
        hare = hare.next
        tortoise = tortoise.next;
    }
    return false;
};

const ll1 = Node.toLinkedList([1,2,3,4,5]);
ll1.next.next.next.next.next = ll1.next.next
const ll2 = Node.toLinkedList([1,2,3,4,5]);
ll2.next.next.next.next.next = ll2.next.next.next.next;
const testCases = [
    { input: [ll1], output: true },
    { input: [ll2], output: true },
    { input: [Node.toLinkedList([1,2,3,4])], output: false },
];

test(loopDetection, testCases, { copy: false });