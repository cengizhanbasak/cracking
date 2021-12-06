// import { test } from "./test";
import Node from "./Node";

const partition = (head: Node<number>, partitionLimit: number): Node<number> => {
    let newHead = null;
    let n = head;
    let prev = null;
    let oldHead = null;
    while (n !== null) {
        if (n.data < partitionLimit) {
            const next = n.next;
            if (prev) {
                prev.next = next;
            }
            n.next = newHead;
            newHead = n;
            n = next;
        } else {
            if (oldHead === null) {
                oldHead = n;
            }
            prev = n;
            n = n.next;
        }
    }
    n = newHead;
    while (n.next !== null) {
        n = n.next;
    }
    n.next = oldHead;
    return newHead;
};

const ll1 = Node.toLinkedList([3,5,8,5,10,2,1]);
const p1 = 5;
const ll2 = Node.toLinkedList([3,5,8,5,10]);
const p2 = 10;
const ll3 = Node.toLinkedList([1,2,3,4,5,6,7,8,9]);
const p3 = 4;
const ll4 = Node.toLinkedList([9,8,7,6,5,4,3,2,1]);
const p4 = 4;

console.log(Node.toString(partition(ll1, p1)));
console.log(Node.toString(partition(ll2, p2)));
console.log(Node.toString(partition(ll3, p3)));
console.log(Node.toString(partition(ll4, p4)));