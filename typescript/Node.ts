class Node<T> {
    next: Node<T> = null;
    data: T;

    constructor(d: T) {
        this.data = d;
        this.next = null;
    }

    appendToTail(d: T) {
        const end = new Node<T>(d);
        let n: Node<T> = this;
        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
    }

    static clone(node: Node<any>) {
        const head = new Node(node.data);
        let n = head;
        let p = node;
        while(p.next !== null) {
            n.next = new Node(p.next.data);
            n = n.next;
            p = p.next;
        }
        return head;
    }

    static deleteNode<T>(head: Node<T>, i: number) {
        let n = head;
        if (i === 0) {
            return head.next;
        }
        while (i > 1) {
            n = n.next;
        }
        if (n.next !== null) {
            n.next = n.next.next;
        }
        return n;
    }

    static toString<T>(head: Node<T>) {
        const l = [];
        let n = head;
        while(n !== null) {
            l.push(n.data);
            n = n.next;
        }
        return l.join(", ");
    }

    static toLinkedList<T>(arr: Array<T>) {
        let head = null;
        let prev = null;
        for (let i = 0; i < arr.length; i++) {
            const n = new Node(arr[i]);
            if (!head) {
                head = n;
            }
            if (prev) {
                prev.next = n;
            }
            prev = n;
        }
        return head;
    }
}

Node.prototype.toString = () => Node.toString(this);

export default Node;