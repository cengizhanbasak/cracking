import { test } from "./test";

class stackMin {
    _arr: Array<number>;
    minimum: number;

    constructor () {
        this._arr = [];
        this.minimum = null;
    }
    
    push(num: number) {
        if (this.minimum === null || num < this.minimum) {
            this.minimum = num;
        }
        return this._arr.push(num);
    }

    pop() {
        const popped = this._arr.pop();
        if (popped === this.minimum) {
            this._calcMin();
        }
        return popped;
    }
    
    peek() {
        return this._arr[this._arr.length - 1];
    }

    min() {
        return this.minimum;
    }

    _calcMin() {
        let currMin = null;
        for (let i = 0; i < this._arr.length; i++) {
            if (currMin === null || this._arr[i] < currMin) {
                currMin = this._arr[i];
            }
        }
        this.minimum = currMin;
    }
}

const t = new stackMin();
t.push(3);
const min1 = t.min();
t.push(2);
const min2 = t.min();
t.push(3);
t.pop();
t.pop();
const min3 = t.min();
t.push(6);
t.pop();
t.push(9);
t.push(1);
const min4 = t.min();

const testCases = [
    { input: [min1], output: 3 },
    { input: [min2], output: 2 },
    { input: [min3], output: 3 },
    { input: [min4], output: 1 },
];

test(x => x, testCases, { copy: false });