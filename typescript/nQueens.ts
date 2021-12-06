const nQueens = (n: number): Array<Array<Array<string>>> => {
    const res = new Array<Array<Array<string>>>();
    const board: Array<Array<string>> = Array(n).fill(0).map(() =>(Array(n).fill('.')));
    const colsUsed: Record<number, boolean> = {};
    const diagonals45Used: Record<number, boolean> = {};
    const diagonals135Used: Record<number, boolean> = {};
    const put = (i: number, j: number) => {
        const d45index = i + j;
        const d135index = i - j;

        if (colsUsed[j] || diagonals45Used[d45index] || diagonals135Used[i - j]) {
            return;
        }

        board[i][j] = 'Q'
        colsUsed[j] = true;
        diagonals45Used[d45index] = true;
        diagonals135Used[i - j] = true;

        if (i === n - 1) {
            res.push(board.map(row => row.map(y => y))); // deep clone
        } else {
            for (let k = 0; k < n; k++) {
                put(i + 1, k);
            }
        }

        board[i][j] = '.';
        colsUsed[j] = false;
        diagonals45Used[d45index] = false;
        diagonals135Used[i - j] = false;
    }
    for (let k = 0; k < n; k++) {
        put(0, k);
    }
    return res;
}

console.log(nQueens(4));
console.log(nQueens(8));
