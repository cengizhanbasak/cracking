import { test } from "./test";

class ThreeInOne {
    _arr: Array<number>;
    size: number;
    stackTops: [number, number, number];

    constructor (size: number) {
        this.size = size;
        this._arr = new Array(size * 3);
        this.stackTops = [0, size, size*2];
    }
    
    push(index: 0 | 1 | 2, num: number) {
        if (this.stackTops[index] === this.size * (index+1)) {
            console.log("full stack");
            return;
        } else {
            this._arr[this.stackTops[index]] = num;
            this.stackTops[index]++;
        }
    }

    pop(index: 0 | 1 | 2) {
        if (this.stackTops[index] === this.size * index) {
            console.log("empty stack");
            return;
        } else {
            this.stackTops[index]--;
        }
    }
    
    peek(index: 0 | 1 | 2) {
        if (this.stackTops[index] === this.size * index) {
            console.log("empty stack");
            return;
        } else {
            return this._arr[this.stackTops[index]-1];
        }
    }
}

const t = new ThreeInOne(3);
t.push(0, 1);
t.push(0, 2);
t.push(0, 3);
t.pop(0);
t.push(1, 5);
t.push(1, 6);
t.pop(1);
t.push(1, 9);
t.push(1, 7);
t.push(1, 11); // should log full stack


const testCases = [
    { input: [t.peek(0)], output: 2 },
    { input: [t.peek(1)], output: 7 },
    { input: [t.peek(2)], output: undefined }, // should log empty stack
];

test(x => x, testCases);