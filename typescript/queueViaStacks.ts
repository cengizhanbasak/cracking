import { test } from "./test";
import { Stack } from "./Stack";

export class queueViaStacks {
    stack1: Stack;
    stack2: Stack;

    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(num: number) {
        this.__dumpToS1();
        this.stack1.push(num);
    }

    dequeue() {
        this.__dumpToS2();
        return this.stack2.pop();
    }

    peek() {
        this.__dumpToS2();
        return this.stack2.peek();
    }

    isEmpty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }

    __dumpToS1() {
        while(!this.stack2.isEmpty()) {
            const x = this.stack2.pop();
            this.stack1.push(x);
        }
    }
    __dumpToS2() {
        while(!this.stack1.isEmpty()) {
            const x = this.stack1.pop();
            this.stack2.push(x);
        }
    }
}

const q = new queueViaStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
const v1 = q.dequeue();
const v2 = q.dequeue();
q.enqueue(5);
const v3 = q.dequeue();
const v4 = q.dequeue();

const testCases = [
    { input: [v1], output: 1 },
    { input: [v2], output: 2 },
    { input: [v3], output: 3 },
    { input: [v4], output: 5 },
];

test(x => x, testCases, { copy: false });
