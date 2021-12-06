const parens = (n: number): Array<string> => {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return ["()"];
    }
    const res = new Array<string>();
    const prevAnswers = parens(n-1);
    const memo: Record<string, boolean> = {};
    for (let answer of prevAnswers) {
        const answers = ["(" + answer + ")", answer + "()", "()" + answer];
        for (let possibleAnswer of answers) {
            if (!memo[possibleAnswer]) {
                memo[possibleAnswer] = true;
                res.push(possibleAnswer);
            }
        }
    }
    return res;
}

console.log(parens(3));
console.log(parens(4));
