const coinsMemo: Record<string, number> = {0: 1};
const coins = (n: number): number => {
    return coinsDenoms(n, [25, 10, 5, 1], 0);
}

const coinsDenoms = (n: number, denoms: Array<number>, i: number): number => {
    if (coinsMemo[`${n}, ${i}`]) {
        return coinsMemo[`${n}, ${i}`];
    }
    if (i >= denoms.length - 1) return 1;
    let denom = denoms[i];
    let ways = 0;
    for (let k = 0; k * denom <= n; k++) {
        const remaining = n - (k * denom);
        ways += coinsDenoms(remaining, denoms, i + 1);
    }
    coinsMemo[`${n}, ${i}`] = ways;
    return ways;
};

console.log(coins(1));
console.log(coins(5));
console.log(coins(12));
console.log(coins(100));
console.log(coins(10000));
