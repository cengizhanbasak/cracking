const sieveOfErastosthenes = (max: number): boolean[] => {
    const flags = new Array<boolean>(max + 1);
    flags.fill(true);
    flags[0] = false;
    flags[1] = false;
    let prime = 2;
    const sqrt = Math.sqrt(max);
    while(prime <= sqrt) {
        let k = 2;
        while(prime * k <= max) {
            flags[prime * k] = false;
            k++;
        }
        prime++;
        while(flags[prime] !== true) {
            prime++;
        }
    }

    return flags;
}

const start = Date.now();
const primeFlags = sieveOfErastosthenes(10000000);
const end = Date.now();
console.log(primeFlags.map((val, index) => val ? index : null).filter(x => x));
console.log("Execution time(in ms):", end - start);
