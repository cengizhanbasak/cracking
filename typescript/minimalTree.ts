import { TreeNode, Tree } from "./Tree";

const minimalTree = (arr: number[]): Tree<number> => {
    const res = new Tree<number>();
    const root = createTreeNode(arr, 0, arr.length);
    res.root = root;
    return res;
};

const createTreeNode = (arr: number[], start: number, end: number): TreeNode<number> => {
    const index = Math.floor(start + (end - start) / 2);
    if (end <= start) return null;
    const root = new TreeNode<number>();
    root.data = arr[index];
    root.children = [
        createTreeNode(arr, start, index),
        createTreeNode(arr, index + 1, end)
    ];
    return root;
}

const t1 = minimalTree([1,2,3]);
console.log(JSON.stringify(t1));
const t2 = minimalTree([1,2,3,4,5]);
console.log(JSON.stringify(t2));
const t3 = minimalTree([1,2,3,4,5,6,7,8]);
console.log(JSON.stringify(t3));