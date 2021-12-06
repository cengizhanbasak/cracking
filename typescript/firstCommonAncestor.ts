import { Tree, TreeNode } from "./Tree";

const firstCommonAncestor = (t: Tree<any>, node1: TreeNode<any>, node2: TreeNode<any>): TreeNode<any> => {
    const node1Stack = find(t.root, node1, []);
    const node2Stack = find(t.root, node2, []);
    let k = 0;
    while (node1Stack[node1Stack.length - k] === node2Stack[node2Stack.length - k]) {
        k++;
    }
    return node1Stack[node1Stack.length - k + 1];
}

const find = (root: TreeNode<any>, node1: TreeNode<any>, stack: TreeNode<any>[]): TreeNode<any>[] => {
    if (root === null) return null;
    if (root === node1) return [root, ...stack];
    return find(root.left(), node1, [root, ...stack]) || find(root.right(), node1, [root, ...stack]);
};


const n1 = new TreeNode<number>();
n1.data = 10;
const n2 = new TreeNode<number>();
n2.data = 5;
const n3 = new TreeNode<number>();
n3.data = 15;
const n4 = new TreeNode<number>();
n4.data = 3;
const n5 = new TreeNode<number>();
n5.data = 8;
const n6 = new TreeNode<number>();
n6.data = 2;
const n7 = new TreeNode<number>();
n7.data = 4;
const n8 = new TreeNode<number>();
n8.data = 6;
const n9 = new TreeNode<number>();
n9.data = 9;
const n10 = new TreeNode<number>();
n10.data = 7;

n1.children = [n2, n3];
n2.children = [n4, n5];
n3.children = [null, null];
n4.children = [n6, n7];
n5.children = [n8, n9];
n6.children = [null, null];
n7.children = [null, null];
n8.children = [null, n10];
n9.children = [null, null];
n10.children = [null, null];

n1.parent = null;
n2.parent = n1;
n3.parent = n1;
n4.parent = n2;
n5.parent = n2;
n6.parent = n4;
n7.parent = n4;
n8.parent = n5;
n9.parent = n5;
n10.parent = n8;
const t = new Tree();
t.root = n1;

console.log(firstCommonAncestor(t, n4, n9) === n2);
console.log(firstCommonAncestor(t, n3, n10) === n1);
console.log(firstCommonAncestor(t, n3, n1) === n1);
console.log(firstCommonAncestor(t, n2, n10) === n2);