import { Stack } from "./Stack";
import { test } from "./test";

class sortStack {
    _arr: Array<number>;
    tempStack: Stack;

    constructor() {
        this._arr = [];
        this.tempStack = new Stack();
    }

    push(num: number) {
        const min = this.peek();
        if (min !== null && num > min) {
            while (this.peek() < num) {
                this.tempStack.push(this.pop());
            }
        }
        this._arr.push(num);
        while (!this.tempStack.isEmpty()) {
            this.push(this.tempStack.pop());
        }
    }

    pop() {
        return this._arr.pop();
    }

    peek() {
        return this._arr[this._arr.length - 1];
    }

    isEmpty() {
        return this._arr.length === 0;
    }
}


const q = new sortStack();
q.push(3);
q.push(2);
q.push(1);
const v1 = q.pop();
const v2 = q.pop();
q.push(5);
const v3 = q.pop();
const v4 = q.pop();

const testCases = [
    { input: [v1], output: 1 },
    { input: [v2], output: 2 },
    { input: [v3], output: 3 },
    { input: [v4], output: 5 },
];

test(x => x, testCases, { copy: false });
