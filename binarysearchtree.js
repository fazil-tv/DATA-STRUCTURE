class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let curr = this.root;
        while (curr) {
            if (curr.data > data) {
                if (curr.left === null) {
                    curr.left = newNode;
                    break;
                } else {
                    curr = curr.left;
                }
            } else {
                if (curr.right === null) {
                    curr.right = newNode;
                    break;
                } else {
                    curr = curr.right;
                }
            }
        }
    }

    print() {
        this.printNode(this.root);
    }

    printNode(node) {
        if (node !== null) {
            this.printNode(node.left);
            console.log(node.data);
            this.printNode(node.right);
        }
    }

    search(value) {
        let curr = this.root;
        while (curr) {
            if (curr.data === value) {
                return true;
            } else if (curr.data > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }

    min(root) {
        if (!root.left) {
            return root.data;
        }
        return this.min(root.left);
    }

    max(root) {
        if (!root.right) {
            return root.data;
        }
        return this.max(root.right);
    }

    inorder(root) {
        if (root !== null) {
            this.inorder(root.left);
            console.log("[", root.data, "]");
            this.inorder(root.right);
        }
    }

    preOrder(root) {
        if (root !== null) {
            console.log("{", root.data, "}");
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root !== null) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log("(", root.data, ")");
        }
    }

    delete(val) {
        this.root = this.delHelper(this.root, val);
    }

    delHelper(root, val) {
        if (root === null) {
            return root;
        }
        if (root.data > val) {
            root.left = this.delHelper(root.left, val);
        } else if (root.data < val) {
            root.right = this.delHelper(root.right, val);
        } else {
            if (!root.right && !root.left) {
                return null;
            }
            if (!root.right) {
                return root.left;
            } else if (!root.left) {
                return root.right;
            }
            root.data = this.min(root.right);
            root.right = this.delHelper(root.right, root.data);
        }
        return root;
    }

    validateTree() {
        let value = [];
        this.inorderTraversal(this.root, value);

        for (let i = 1; i < value.length; i++) {
            if (value[i] < value[i - 1]) {
                return false;
            }
        }
        return true;
    }

    inorderTraversal(root, value) {
        if (root) {
            this.inorderTraversal(root.left, value);
            value.push(root.data);
            this.inorderTraversal(root.right, value);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50);
console.log(bst.search(20));
bst.print();
