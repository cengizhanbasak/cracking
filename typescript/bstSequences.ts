import Node from "./Node";
import { TreeNode } from "./Tree";

const bstSequences = (root: TreeNode<number>): Node<number>[] => {
    let res = new Array<Node<number>>();

    if (root === null) {
        res.push(null);
        return res;
    }

    const prefix = new Node<number>(root.data);

    const leftSeq = bstSequences(root.left());
    const rightSeq = bstSequences(root.right());
    // console.log("lq", leftSeq);
    // console.log("rq", rightSeq);
    for (const lSeq of leftSeq) {
        for (const rSeq of rightSeq) {
            const weaved = new Array<Node<number>>();
            weaveLists(lSeq, rSeq, weaved, prefix);
            // console.log("newWeaved", weaved);
            res = res.concat(weaved);
        }
    }
    // console.log('res', res);
    return res;
}

const weaveLists = (n1:Node<number>, n2: Node<number>, weaved: Array<Node<number>>, prefix: Node<number>): void => {
    if (n1 === null || n2 === null) {
        // console.log(prefix);
        const result = Node.clone(prefix);
        // console.log(result);
        let n = result;
        while(n.next !== null) {
            n = n.next;
        }
        n.next = n1 === null ? n2 : n1;
        weaved.push(result);
        // console.log("weaved b4", weaved);
        return;
    }

    let n1head = n1;
    n1 = n1.next;
    n1head.next = null;
    let n = prefix;
    while (n.next !== null) {
        n = n.next;
    }
    n.next = n1head;
    weaveLists(n1, n2, weaved, prefix);
    n = prefix;
    while (n.next.next !== null) {
        n = n.next;
    }
    n.next = null;
    n1head.next = n1;
    n1 = n1head;

    let n2head = n2;
    n2 = n2.next;
    n2head.next = null;
    n = prefix;
    while (n.next !== null) {
        n = n.next;
    }
    n.next = n2head;
    weaveLists(n1, n2, weaved, prefix);
    n = prefix;
    while (n.next.next !== null) {
        n = n.next;
    }
    n.next = null;
    n2head.next = n2;
    n2 = n2head;
    return;
};

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

n1.children = [n2, n3];
n2.children = [null, n4];
n3.children = [null, n5];
n4.children = [null, null];
n5.children = [null, null];

const res = bstSequences(n1);
console.log(res);
console.log(res.map(x => Node.toString(x)));
const res2 = bstSequences(n4);
console.log(res2);
console.log(res2.map(x => Node.toString(x)));