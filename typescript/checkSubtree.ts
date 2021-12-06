import { TreeNode } from "./Tree";

const checkSubtree = (n1: TreeNode<string>, n2: TreeNode<string>): boolean => {
    const preOrder1 = preOrderTraversal(n1);
    const preOrder2 = preOrderTraversal(n2);
    return preOrder1.indexOf(preOrder2) > -1 || preOrder2.indexOf(preOrder1) > -1;
};

const preOrderTraversal = (n: TreeNode<string>): string => {
    if (n === null) {
        return '#';
    }
    return n.data + preOrderTraversal(n.left()) + preOrderTraversal(n.right());
}

const n1 = new TreeNode<string>();
n1.data = "3";
const n2 = new TreeNode<string>();
n2.data = "1";
const n3 = new TreeNode<string>();
n3.data = "4";
const n4 = new TreeNode<string>();
n4.data = "2";
const n5 = new TreeNode<string>();
n5.data = "5";
const n6 = new TreeNode<string>();
n6.data = "6";

n1.children = [n2, n3];
n2.children = [null, n4];
n3.children = [null, n5];
n4.children = [null, null];
n5.children = [null, null];

console.log(checkSubtree(n1, n3)); // true
console.log(checkSubtree(n1, n6)); // false
