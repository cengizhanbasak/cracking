const fibonacci = (n: number): number => {
    if (n < 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
};
console.log(fibonacci(5));
console.log(fibonacci(10));

const fiboN = 40;
const startTime = Date.now();
let fibos = new Array<number>(fiboN);
fibos.fill(0);
fibos.forEach((_, i) => fibos[i] = fibonacci(i));
const endTime = Date.now();
console.log("ExecutionTime:", endTime - startTime);
console.log(fibos);

const fibonacciM = (n: number, memo: Record<number, number>): number => {
    if (memo[n]) return memo[n];
    if (n < 2) return 1;
    const res = fibonacciM(n-1, memo) + fibonacciM(n-2, memo);
    memo[n] = res;
    return res;
}


const startTimeM = Date.now();
let fibosM = new Array<number>(1000);
fibosM.fill(0);
const memo = {};
fibosM.forEach((_, i) => fibosM[i] = fibonacciM(i, memo));
const endTimeM = Date.now();
console.log("ExecutionTime:", endTimeM - startTimeM);
console.log(fibosM);