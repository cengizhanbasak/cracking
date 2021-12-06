import Node from "./Node";
import { Tree, TreeNode } from "./Tree";

const listOfDepths = (t: Tree<any>): Node<TreeNode<any>>[] => {
    const res: Node<TreeNode<any>>[] = [];
    let levelList: Node<TreeNode<any>> = null;
    if (t.root !== null) {
        levelList = new Node<TreeNode<any>>(t.root);
    }
    while(levelList) {
        res.push(levelList);
        let n = levelList;
        levelList = null;
        while (n !== null) {
            const children = n.data.children;
            for (let c of children) {
                if (levelList === null) {
                    levelList = new Node(c);
                } else {
                    levelList.appendToTail(c);
                }
            }
            n = n.next;
        }
    }
    return res;
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
console.log(listOfDepths(tree1));