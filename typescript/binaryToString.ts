const binaryToString = (n: number): string => {
    if (n >= 1 || n <= 0) {
        return "ERROR";
    }
    let s = "0.";
    while (n > 0) {
        if (s.length > 32) {
            return "ERROR";
        }
        n = n * 2;
        if (n >= 1) {
            s += "1";
            n -= 1;
        } else {
            s += "0";
        }
    }
    return s;
}

console.log(binaryToString(0.5));
console.log(binaryToString(0.125));
console.log(binaryToString(0.25));
console.log(binaryToString(0.625));
console.log(binaryToString(0.375));
console.log(binaryToString(0.515625));
console.log(binaryToString(0.765625));
console.log(binaryToString(0.640625));
