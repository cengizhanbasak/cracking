const magicIndex = (arr: number[]): number => {
    return searchMagicIndex(arr, 0, arr.length);
};

const searchMagicIndex = (arr: number[], start: number, end: number): number => {
    if (start === end) return arr[start] === start ? start : -1;
    const middle = start + Math.floor((end - start) / 2);
    if (middle === arr[middle]) {
        return middle;
    } else if (middle > arr[middle]) {
        return searchMagicIndex(arr, middle + 1, end);
    } else {
        return searchMagicIndex(arr, start, middle);
    }
};

console.log(magicIndex([-5,-3,-2,1,3,4,6]) === 6);
console.log(magicIndex([-5,-3,-2,1,3,4,5]) === -1);
console.log(magicIndex([-5,-3,-2,1,4,8,10]) === 4);
