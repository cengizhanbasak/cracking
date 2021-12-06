const tripleStep = (stairs: number, memo: Record<number, number>): number => {
    if (memo[stairs]) return memo[stairs];
    if (stairs < 0) return 0;
    if (stairs === 0) return 1;
    const res = tripleStep(stairs - 3, memo) + tripleStep(stairs - 2, memo) + tripleStep(stairs - 1, memo);
    memo[stairs] = res;
    return res;
};


const startM = Date.now();
let tripleStepM = new Array<number>(1000);
tripleStepM.fill(0);
const memoo = {};
tripleStepM.forEach((_, i) => tripleStepM[i] = tripleStep(i, memoo));
const endM = Date.now();
console.log("ExecutionTime:", endM - startM);
console.log(tripleStepM);