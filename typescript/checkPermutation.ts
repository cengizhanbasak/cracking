import { test } from "./test";

const checkPermutation = (s1: string, s2: string): boolean => {
    const s1Counts = getCounts(s1);
    const s2Counts = getCounts(s2);
    for(let i = 0; i < s1.length; i++) {
        if (s1Counts[s1[i]] !== s2Counts[s1[i]]) {
            return false;
        }
    }
    return true;
};

const getCounts = (s: string) => {
    const res: Record<string, number> = {};
    for(let i = 0; i < s.length; i++) {
        res[s[i]] = (res[s[i]] || 0) + 1;
    }
    return res;
};


const testCases = [
    { input: ["asdf", "fdsa"], output: true },
    { input: ["asda", "asds"], output: false },
];

test(checkPermutation, testCases);