import { test } from "./test";

const oneAway = (s1: string, s2: string): boolean => {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    const [long, short] = s1.length > s2.length ? [s1, s2] : [s2, s1];
    let changed = false;
    let slided = false;
    for (let i = 0; i < long.length; i++) {
        if(long[i] !== short[i - (slided ? 1 : 0)]) {
            if (changed) {
                return false;
            } else {
                changed = true;
                slided = s1.length !== s2.length;
            }
        }
    }
    return true;
};


const testCases = [
    { input: ["pale", "ple"], output: true },
    { input: ["pales", "pale"], output: true },
    { input: ["pale", "bale"], output: true },
    { input: ["pale", "bake"], output: false },
    { input: ["", "a"], output: true },
    { input: ["pale", "pale"], output: true },
    { input: ["pale", "paleee"], output: false },
];

test(oneAway, testCases);