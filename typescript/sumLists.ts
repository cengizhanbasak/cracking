import { test } from "./test";
import Node from "./Node";

const sumLists = (head1: Node<number>, head2: Node<number>): number => {
    let num1 = 0;
    let num2 = 0;
    let exp1 = 0;
    let exp2 = 0;
    while(head1 !== null) {
        num1 += head1.data * Math.pow(10, exp1);
        head1 = head1.next;
        exp1++;
    }
    while(head2 !== null) {
        num2 += head2.data * Math.pow(10, exp2);
        head2 = head2.next;
        exp2++;
    }
    return num1 + num2;
};

const testCases = [
    { input: [Node.toLinkedList([1,2,3,4]), Node.toLinkedList([1,2,3,4])], output: 8642 },
    { input: [Node.toLinkedList([7, 1, 6]), Node.toLinkedList([5, 9, 2])], output: 912 }
];

test(sumLists, testCases);