const robotInAGrid = (maze: Array<Array<boolean>>): Array<[number, number]> => {
    const res = new Array<[number, number]>();
    if (getPath(maze, maze.length - 1, maze[0].length - 1, res, {})) {
        return res;
    }
    return res;
};

const getPath = (maze: Array<Array<boolean>>, row: number, col: number, res: Array<[number, number]>, memo: Record<string, boolean>): boolean => {
    if (memo[`${row}, ${col}`] !== undefined) {
        // console.log("revisited", `${row}, ${col}`);
        return memo[`${row}, ${col}`];
    }
    if (col < 0 || row < 0 || maze[row][col] === false) {
        memo[`${row}, ${col}`] = false;
        return false;
    }
    const isAtOrigin = col === 0 && row === 0;
    if (isAtOrigin || getPath(maze, row - 1, col, res, memo) || getPath(maze, row, col - 1, res, memo)) {
        res.push([row, col]);
        memo[`${row}, ${col}`] = true;
        return true;
    }
    memo[`${row}, ${col}`] = false;
    return false;
}

const maze1 = [
    [true, true, true, true, false],
    [false, false, true, true, false],
    [true, false, true, false, true],
    [true, true, true, false, true],
    [true, true, true, true, true],
];
console.log(robotInAGrid(maze1));
const maze2 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, false, false, false ,false],
    [true, false, true,true ,false],
    [true, false, true,false ,true],
    [true, false, true,false ,true],
    [true, false, true,false ,true],
    [true, true, true, true, true],
];
console.log(robotInAGrid(maze2));
