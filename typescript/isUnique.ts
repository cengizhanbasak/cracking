import { test } from "./test";

const isUnique = (s: string): boolean => {
    const chars = new Array<boolean>(128);
    chars.fill(false);
    for (let i = 0; i < s.length; i++) {
        if (chars[s.charCodeAt(i)]) {
            return false;
        }
        chars[s.charCodeAt(i)] = true;
    }
    return true;
};


const testCases = [
    { input: ["asdf"], output: true },
    { input: ["asda"], output: false },
];

test(isUnique, testCases);