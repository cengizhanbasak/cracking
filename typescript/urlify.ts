import { test } from "./test";

const urlify = (s: string, n: number): string => {
    // as strings are immutable, let's work in array of chars
    const ss = s.split("");
    let numChars = 0;
    for (let i = 0; i < n; i++) {
        let c = ss[i];
        if (c !== " ") {
            numChars++;
        }
    }
    let p = ss.length - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (ss[i] === " ") {
            ss.splice(p-2, 3, "%", "2", "0");
            p -= 3;
        } else {
            ss[p] = ss[i];
            p--;
        }
    }
    return ss.join("");
};

const testCases = [
    { input: ["Mr John Smith    ", 13], output: "Mr%20John%20Smith" },
    { input: ["asda", 4], output: "asda" },
    { input: ["as da  ", 5], output: "as%20da" },
];

test(urlify, testCases);
