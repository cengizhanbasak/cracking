import { Tree, TreeNode } from "./Tree";

const validateBST = (t: Tree<number>): boolean => {
    return validateTreeNode(t.root, null, null);
};

const validateTreeNode = (n: TreeNode<number>, min: number, max: number): boolean => {
    if (!n) return true;
    const minValid = min !== null ? n.data > min : true;
    const maxValid = max !== null ? n.data <= max : true;
    const isNodeValid = minValid && maxValid;
    const isLefttTreeValid = validateTreeNode(n.children[0], min, n.data);
    const isRightTreeValid = validateTreeNode(n.children[1], n.data, max);
    return isNodeValid && isLefttTreeValid && isRightTreeValid;
}

const t1 = new Tree<number>();
const node1 = new TreeNode<number>();
node1.data = 5;
const node2 = new TreeNode<number>();
node2.data = 3;
const node3 = new TreeNode<number>();
node3.data = 8;
const node4 = new TreeNode<number>();
node4.data = 2;
const node5 = new TreeNode<number>();
node5.data = 4;
const node6 = new TreeNode<number>();
node6.data = 6;
const node7 = new TreeNode<number>();
node7.data = 10;
const node8 = new TreeNode<number>();
node8.data = 7;

node1.children = [node2, node3];
node2.children = [node4, node5];
node3.children = [node6, node7];
node4.children = [null, null];
node5.children = [null, null];
node6.children = [null, node8];
node7.children = [null, null];
node8.children = [null, null];
t1.root = node1;

const t2 = new Tree<number>();
const n1 = new TreeNode<number>();
n1.data = 3;
const n2 = new TreeNode<number>();
n2.data = 1;
const n3 = new TreeNode<number>();
n3.data = 2;
n1.children = [n2, n3];
n2.children = [null, null];
n3.children = [null, null];
t2.root = n1;

console.log(validateBST(t1)); // true
console.log(validateBST(t2)); // false