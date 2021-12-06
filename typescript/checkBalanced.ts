import { Tree, TreeNode } from "./Tree";

const checkBalanced = (t: Tree<any>): boolean => {
    return Math.abs(getDepth(t.root.children[0], 0) - getDepth(t.root.children[1], 0)) < 1;
}

const getDepth = (t: TreeNode<any>, currDepth: number): number => {
    if (!t) return currDepth;
    if (t.children.length > 0) {
        const childrenDepths = t.children.map(c => getDepth(c, currDepth + 1));
        return  Math.max(...childrenDepths);
    }
    return currDepth;
}

const tree1 = new Tree();
const node1 = new TreeNode();
node1.data = 1;
const node2 = new TreeNode();
node2.data = 2;
const node3 = new TreeNode();
node3.data = 3;
const node4 = new TreeNode();
node4.data = 4;
const node5 = new TreeNode();
node5.data = 5;
node1.children = [node2, node3];
node2.children = [node4];
node3.children = [node5];
tree1.root = node1;
console.log(checkBalanced(tree1));


const tree2 = new Tree();
const node6 = new TreeNode();
node6.data = 6;
const node7 = new TreeNode();
node7.data = 7;
const node8 = new TreeNode();
node8.data = 8;
const node9 = new TreeNode();
node9.data = 9;
const node10 = new TreeNode();
node10.data = 10;
const node11 = new TreeNode();
node11.data = 11;
const node12 = new TreeNode();
node12.data = 12;

node6.children = [node7, node8];
node7.children = [node11];
node8.children = [node9];
node9.children = [node10];
node10.children = [node12];
tree2.root = node6;
console.log(checkBalanced(tree2));