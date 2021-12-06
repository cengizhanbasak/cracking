const insertion = (M: number, N: number, i: number, j: number): number => {
    // clear i to j in N
    let k = (Math.pow(2, j - i) - 1) << i;
    N = N & ~k;
    // shift M left by i
    M = M << i;
    // bitwise OR cleared N with shifted M
    return M | N;
}

console.log(insertion(19, 1024, 2, 6) === 1100);
console.log(insertion(5, 26, 0 ,2) === 29);

