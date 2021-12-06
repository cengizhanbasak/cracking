import { test } from "./test";

const stringCompression = (s: string): string => {
    let out = "";

    let currChar = "";
    let currLen = 0;
    for(let i = 0; i < s.length; i++) {
        if (currChar === s[i]) {
            currLen++;
        } else {
            out += currLen > 0 ? currChar + currLen : '';
            currChar = s[i];
            currLen = 1;
        }
    }
    out += currChar + currLen;
    return s.length <= out.length ? s : out;
};


const testCases = [
    { input: ["aabcccccaa"], output: "a2b1c5a2" },
    { input: ["asda"], output: "asda" },
    { input: ["aabbccdd"], output: "aabbccdd" },
    { input: ["aabbccddd"], output: "a2b2c2d3" },
];

test(stringCompression, testCases);