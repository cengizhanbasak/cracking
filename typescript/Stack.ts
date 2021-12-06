export class Stack {
    _arr: Array<number>;
    constructor() {
        this._arr = [];
    }

    push(num: number) {
        this._arr.push(num);
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