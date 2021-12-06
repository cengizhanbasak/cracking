export const test = <X extends any[], Y>(
    func: (...args: any[]) => Y,
    testCases: { input: X, output: Y }[],
    opts?: {
        copy?: boolean,
        beforeEach?: () => any,
    }
) => {
    testCases.forEach(({ input, output }) => {
        if (opts.beforeEach) {
            opts.beforeEach();
        }
        let inputCopy = input;
        if (opts.copy) {
            inputCopy = JSON.parse(JSON.stringify(input));
        }
        const out = func(...input)
        let pass = false;
        if (Array.isArray(out)) {
            pass = JSON.stringify(out) === JSON.stringify(output);
        } else {
            pass = out === output;
        }
        if (pass) {
            console.log("PASS");
        } else {
            console.log("----- FAIL CASE START -----");
            console.log("input:", inputCopy);
            console.log("given output:", out);
            console.log("expected output:", output);
            console.log("----- FAIL CASE END -----");
        }
    })
};