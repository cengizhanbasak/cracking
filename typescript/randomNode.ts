class RandomNode {
    left: RandomNode;
    right: RandomNode;
    data: number;
    count: number;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.count = 1;
    }

    insert(data: number) {
        if (data <= this.data) {
            if (this.left === null) {
                this.left = new RandomNode(data);
            } else {
                this.left.insert(data);
            }
        } else {
            if (this.right === null) {
                this.right = new RandomNode(data);
            } else {
                this.right.insert(data);
            }
        }
        this.count++;
    }

    size(): number {
        return this.count;
    }

    find(data: number): RandomNode {
        if (data === this.data) {
            return this;
        } else if (data <= this.data) {
            return this.left ? this.left.find(data) : null;
        } else if (data > this.data) {
            return this.right ? this.right.find(data) : null;
        }
    }

    getRandomNode(): RandomNode {
        const leftSize = this.left ? this.left.size() : 0;
        const rand = Math.floor(Math.random() * this.count);
        if (rand < leftSize) {
            return this.left.getRandomNode();
        } else if (rand === leftSize || !this.right) {
            return this;
        } else {
            return this.right.getRandomNode();
        }
    }

}


const n1 = new RandomNode(3);
n1.insert(1);
n1.insert(4);
n1.insert(2);
n1.insert(5);

const randomNodes = [];
for (let i = 0; i < 10; i++) {
    randomNodes.push(n1.getRandomNode().data);
}
console.log(randomNodes)