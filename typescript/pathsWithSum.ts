
import { TreeNode } from "./Tree";

const pathsWithSum = (n: TreeNode<number>, target: number): number => {
    if (n === null) {
        return 0;
    }
    const fromRoot = pathsWithCurrentSum(n, target, 0);
    const fromLeft = pathsWithSum(n.left(), target);
    const fromRight = pathsWithSum(n.right(), target);
    return fromRoot + fromLeft + fromRight;
}

const pathsWithCurrentSum = (n: TreeNode<number>, target: number, currentSum: number): number => {
    if (n === null) {
        return 0;
    }
    currentSum += n.data;
    let totalPaths = 0;
    if (currentSum === target) {
        totalPaths += 1;
    }
    totalPaths += pathsWithCurrentSum(n.left(), target, currentSum);
    totalPaths += pathsWithCurrentSum(n.right(), target, currentSum);
    return totalPaths;
}

const n1 = new TreeNode<number>();
n1.data = 3;
const n2 = new TreeNode<number>();
n2.data = 1;
const n3 = new TreeNode<number>();
n3.data = 4;
const n4 = new TreeNode<number>();
n4.data = 2;
const n5 = new TreeNode<number>();
n5.data = 5;
const n6 = new TreeNode<number>();
n6.data = 6;

n1.children = [n2, n3];
n2.children = [null, n4];
n3.children = [null, n5];
n4.children = [null, null];
n5.children = [null, n6];

console.log(pathsWithSum(n1, 4) === 2);
console.log(pathsWithSum(n1, 1) === 1);
console.log(pathsWithSum(n1, 9) === 1);
console.log(pathsWithSum(n1, 12) === 1);
console.log(pathsWithSum(n1, 13) === 0);
console.log(pathsWithSum(n1, 6) === 2);