import { TreeNode } from "./Tree";

const successor = (node: TreeNode<any>): TreeNode<any> => {
    let n = node;
    if (n.right()) {
        n = n.right();
        while (n.left()) {
            n = n.left();
        }
    } else {
        if (n.parent.left() === n) {
            return n.parent;
        } else {
            while (n.parent.right() === n) {
                n = n.parent;
                if (n.parent === null) {
                    return null;
                }
            }
            return n.parent;
        }
    }
    return n;
}

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

node1.parent = null;
node2.parent = node1;
node3.parent = node1;
node4.parent = node2;
node5.parent = node2;
node6.parent = node3;
node7.parent = node3;
node8.parent = node6;

console.log(successor(node3) === node7);
console.log(successor(node1) === node6);
console.log(successor(node4) === node2);
console.log(successor(node7) === null);


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

console.log(successor(n9) === n1);
console.log(successor(n10) === n5);
console.log(successor(n4) === n7);
console.log(successor(n1) === n3);