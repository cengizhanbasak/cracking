export class Queue<T> {
    _arr: Array<T>;
    constructor() {
        this._arr = [];
    }

    enqueue(elem: T) {
        this._arr.unshift(elem);
    }

    dequeue() {
        return this._arr.pop();
    }

    peek() {
        return this._arr[this._arr.length - 1];
    }

    isEmpty() {
        return this._arr.length === 0;
    }
}