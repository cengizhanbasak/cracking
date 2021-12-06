import Node from "./Node";
import { test } from "./test";

type AnimalType = "Dog" | "Cat";

class AnimalShelter {
    dogQueue: Node<number>;
    catQueue: Node<number>;
    animalQueue: Node<number>;

    constructor() {
        this.dogQueue = null;
        this.catQueue = null;
        this.animalQueue = null;
    }

    enqueue(num: number, type: AnimalType) {
        const newNode = new Node(num);
        const aqNode = new Node(type === "Dog" ? -1 : 1);
        let aq = this.animalQueue;
        if (this.animalQueue === null) {
            this.animalQueue = aqNode;
        } else {
            while (aq.next !== null) {
                aq = aq.next;
            }
            aq.next = aqNode;
        }

        if (type === "Dog") {
            let dq = this.dogQueue;
            if (this.dogQueue === null) {
                this.dogQueue = newNode;
            } else {
                while (dq.next !== null) {
                    dq = dq.next;
                }
                dq.next = newNode;
            }
        } else {
            let cq = this.catQueue;
            if (this.catQueue === null) {
                this.catQueue = newNode;
            } else {
                while (cq.next !== null) {
                    cq = cq.next;
                }
                cq.next = newNode;
            }
        }
    }

    dequeueAny() {
        const first = this.animalQueue;
        if (!first) return;
        this.animalQueue = this.animalQueue.next;
        if (first.data === -1) {
            const dogFirst = this.dogQueue;
            this.dogQueue = dogFirst.next;
            return dogFirst.data;
        } else {
            const catFirst = this.catQueue;
            this.catQueue = catFirst.next;
            return catFirst.data;
        }
    }

    dequeueDog() {
        const first = this.dogQueue;
        if (!first) return;
        this.dogQueue = this.dogQueue.next;
        let n = this.animalQueue;
        if (n.data === -1) {
            this.animalQueue = n.next;
        } else {
            while(n.next.data !== -1) {
                n = n.next;
            }
            n.next = n.next.next;
        }
        return first.data;
    }

    dequeueCat() {
        const first = this.catQueue;
        if (!first) return;
        this.catQueue = this.catQueue.next;
        let n = this.animalQueue;
        if (n.data === 1) {
            this.animalQueue = n.next;
        } else {
            while(n.next.data !== 1) {
                n = n.next;
            }
            n.next = n.next.next;
        }
        return first.data;
    }
}

const ash = new AnimalShelter();
ash.enqueue(1, "Dog");
ash.enqueue(2, "Cat");
ash.enqueue(3, "Cat");
ash.enqueue(4, "Dog");
const a1 = ash.dequeueAny();
const a2 = ash.dequeueDog();
const a3 = ash.dequeueCat();
const a4 = ash.dequeueAny();


const testCases = [
    { input: [a1], output: 1 },
    { input: [a2], output: 4 },
    { input: [a3], output: 2 },
    { input: [a4], output: 3 },
];

test(x => x, testCases, { copy: false });
