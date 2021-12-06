import { test } from "./test";

const zeroMatrix = (m: Array<Array<any>>): Array<Array<any>> => {
    const rows = m.length;
    const cols = m.length > 0 ? m[0].length : 0;
    const rowHasZero = m[0].find(a => a === 0);
    const colHasZero = m.find(a => a[0] === 0);
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (m[i][j] === 0) {
                m[0][j] = 0;
                m[i][0] = 0;
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        if (m[i][0] === 0) {
            zeroRow(m, i);
        }
    }
    for (let j = 0; j < cols; j++) {
        if (m[0][j] === 0) {
            zeroCol(m, j);
        }
    }
    if (rowHasZero) {
        zeroRow(m, 0);
    }
    if (colHasZero) {
        zeroCol(m, 0);
    }
    return m;
};

const zeroRow = (m: Array<Array<any>>, i: number): Array<Array<any>> => {
    const cols = m.length > 0 ? m[0].length : 0;
    for (let j = 0; j < cols; j++) {
        m[i][j] = 0;
    }
    return m;
}

const zeroCol = (m: Array<Array<any>>, j: number): Array<Array<any>> => {
    const rows = m.length;
    for (let i = 0; i < rows; i++) {
        m[i][j] = 0;
    }
    return m;
}


const inputMatrix1 = [
    [1,2,3],
    [4,0,6],
    [7,8,9]
];

const outputMatrix1 = [
    [1,0,3],
    [0,0,0],
    [7,0,9]
];

const inputMatrix2 = [
    [1,2,3,4],
    [5,6,0,8],
    [9,0,11,12],
    [13,14,15,16]
];

const outputMatrix2 = [
    [1,0,0,4],
    [0,0,0,0],
    [0,0,0,0],
    [13,0,0,16]
];

const inputMatrix3 = [
    [1,2,3,4,5],
    [6,0,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

const outputMatrix3 = [
    [1,0,3,4,5],
    [0,0,0,0,0],
    [11,0,13,14,15],
    [16,0,18,19,20],
    [21,0,23,24,25]
];

const inputMatrix4 = [
    [1,2,3,4],
    [0,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const outputMatrix4 = [
    [0,2,3,4],
    [0,0,0,0],
    [0,10,11,12],
    [0,14,15,16]
];

const testCases = [
    { input: [inputMatrix1], output: outputMatrix1 },
    { input: [inputMatrix2], output: outputMatrix2 },
    { input: [inputMatrix3], output: outputMatrix3 },
    { input: [inputMatrix4], output: outputMatrix4 },
];

test(zeroMatrix, testCases);