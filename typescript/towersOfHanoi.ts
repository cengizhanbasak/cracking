const towersOfHanoi = (n: number, origin: Array<number>, destination: Array<number>, buffer: Array<number>): void => {
    if (n > 0) {
        towersOfHanoi(n - 1, origin, buffer, destination);
        const top = origin.pop();
        destination.push(top);
        towersOfHanoi(n - 1, buffer, destination, origin);
    }
};

const tower1: Array<number>= [4,3,2,1];
const tower2: Array<number> = [];
const tower3: Array<number> = [];
towersOfHanoi(4, tower1, tower3, tower2);

console.log(tower1);
console.log(tower2);
console.log(tower3);
