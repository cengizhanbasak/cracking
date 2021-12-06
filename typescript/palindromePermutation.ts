import { test } from "./test";

const palindromePermutation = (s: string): boolean => {
    const charCounts = new Array<number>(27);
    charCounts.fill(0);
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - "a".charCodeAt(0);
        if (c >= 0 && c <= 26) {
            charCounts[c]++;
        }
    }
    let hasOdd = false;
    for (let i = 0; i < charCounts.length; i++) {
        if (charCounts[i] % 2 === 1) {
            if (hasOdd) {
                return false;
            } else {
                hasOdd = true;
            }
        }
    }
    return true;
};


const testCases = [
    { input: ["Tact Coa"], output: true },
    { input: ["tacocat"], output: true },
    { input: ["aaa"], output: true },
    { input: ["aab"], output: true },
    { input: ["bbaa"], output: true },
    { input: ["bbab"], output: false },
    { input: ["asdf"], output: false },
    { input: ["rerewq"], output: false },
    { input: ["zzz"], output: true },
    { input: ["zzzz"], output: true },
    { input: ["zzzazz"], output: false },
];

test(palindromePermutation, testCases);