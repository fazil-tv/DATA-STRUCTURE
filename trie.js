class Node {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (const val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new Node();
            }
            curr = curr.children[val];
        }
        curr.end = true;
    }

    display(root = this.root, prefix = "") {
        if (root.end) {
            console.log(prefix);
        }
        for (const value in root.children) {
            this.display(root.children[value], prefix + value);
        }
    }
    
    startWithPrefix(prefix) {
        let curr = this.root;
        for (let val of prefix) {
            if (!curr.children[val]) {
                return 'No matching prefix';
            }
            curr = curr.children[val];
        }
        this.display(curr, prefix);
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(root, word, level) {
        if (root === null) {
            return false;
        }
        if (level === word.length - 1) {
            if (root.end) {
                root.end = false;
            }
            return Object.keys(root.children).length === 0;
        }
        let child = root.children[word[level]];
        let deleted = this.deleteHelper(child, word, level + 1);
        if (deleted) {
            delete root.children[word[level]];
            return Object.keys(root.children).length === 0;
        }
        return false;
    }
    
    search(word) {
        let curr = this.root;
        for (const value of word) {
            if (!curr.children[value]) {
                return false;
            }
            curr = curr.children[value];
        }
        return curr.end;
    }
}

let trie = new Trie();
trie.insert("muhammed fazil tv");
trie.insert("mariyam");
trie.insert("ashraf tv");

trie.display();
console.log("Words starting with 'a':");
trie.startWithPrefix('a');
