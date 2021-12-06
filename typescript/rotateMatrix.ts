import { test } from "./test";

const rotateMatrix = (m: Array<Array<any>>): Array<Array<any>> => {
    const n = m.length - 1;
    let top = 0;
    while (top < n / 2)
    {
        let left = 0;
        while ((left + top * 2) < n) {
            const topEl = m[top][top + left];
            const rightEl = m[left + top][n - top];
            const botEl = m[n - top][n - left - top];
            const leftEl = m[n - left - top][top];
            m[left + top][n - top] = topEl;
            m[n - top][n - left - top] = rightEl;
            m[n - left - top][top] = botEl;
            m[top][top + left] = leftEl;
            left++;
        }
        top++;
    }
    return m;
};


const inputMatrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const outputMatrix1 = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
];

const inputMatrix2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const outputMatrix2 = [
    [13,9,5,1],
    [14,10,6,2],
    [15,11,7,3],
    [16,12,8,4]
];

const inputMatrix3 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

const outputMatrix3 = [
    [21,16,11,6,1],
    [22,17,12,7,2],
    [23,18,13,8,3],
    [24,19,14,9,4],
    [25,20,15,10,5]
];

const testCases = [
    { input: [inputMatrix1], output: outputMatrix1 },
    { input: [inputMatrix2], output: outputMatrix2 },
    { input: [inputMatrix3], output: outputMatrix3 },
];

test(rotateMatrix, testCases);