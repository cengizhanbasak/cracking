import { test } from "./test";

const isUnique = (s1: string, s2: string): boolean => {
    return s1.concat(s1).indexOf(s2) > -1;
};


const testCases = [
    { input: ["asdf", "sdfa"], output: true },
    { input: ["asda", "asad"], output: false },
];

test(isUnique, testCases);