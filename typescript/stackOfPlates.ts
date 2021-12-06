import { test } from "./test";

class stackOfPlates {
    stacks: Array<Array<number>>;
    threshold: number;

    constructor (threshold: number) {
        this.stacks = [];
        this.threshold = threshold;
    }

    push(num: number) {
        let i = 0;
        while(Array.isArray(this.stacks[i]) && this.stacks[i].length >= this.threshold) {
            i++;
        }
        if (!Array.isArray(this.stacks[i])) {
            this.stacks[i] = [];
        }
        this.stacks[i].push(num);
        return;
    }

    pop() {
        let p = this.stacks.length - 1;
        while (Array.isArray(this.stacks[p]) && this.stacks[p].length === 0) p--;
        return this.stacks[p].pop();
    }

    peek() {
        let p = this.stacks.length - 1;
        while (Array.isArray(this.stacks[p]) && this.stacks[p].length === 0) p--;
        return this.stacks[p][this.stacks[p].length - 1];
    }

    popAt(index: number) {
        return this.stacks[index].pop();
    }
}

const t = new stackOfPlates(3);
t.push(3);
t.push(2);
t.push(4);
t.push(6);
t.push(9);
t.push(1);
const l1 = t.pop();
const l2 = t.popAt(0);
const l3 = t.pop();
t.push(7);
const l4 = t.popAt(0);
const l5 = t.peek();

const testCases = [
    { input: [l1], output: 1 },
    { input: [l2], output: 4 },
    { input: [l3], output: 9 },
    { input: [l4], output: 7 },
    { input: [l5], output: 6 },
];

test(x => x, testCases, { copy: false });