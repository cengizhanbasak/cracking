export class TreeNode<T> {
    data: T;
    children: TreeNode<T>[];
    parent?: TreeNode<T>;
    constructor() {
        this.children = [null, null];
    }

    left() {
        return this.children[0];
    }
    right() {
        return this.children[1];
    }
}

TreeNode.prototype.toString = function() {
    return `TreeNode childCount: ${this.children.length}, data: ${this.data}`;
};

export class Tree<T> {
    root: TreeNode<T>;
}