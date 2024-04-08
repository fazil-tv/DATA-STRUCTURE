// Stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0)
            return "novalues";
        return this.items.pop();
    }

    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isValidParentheses(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== mapping[char]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.print();


// Stack using linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackList {
    constructor() {
        this.size = 0;
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        this.top = this.top.next;
    }

    print() {
        let current = this.top;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const stackList = new StackList();
stackList.push(205);
stackList.push(30);
stackList.push(40);
stackList.push(50);
stackList.print();





// Stack using array with additional methods

class StackArray {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        this.items.pop();
    }

    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + "  ";
        }
        console.log(str);
    }

    reverse() {
        let reverseStack = [];
        while (this.items.length > 0) {
            reverseStack.push(this.items.pop());
        }
        this.items = reverseStack;
    }

    duplicates() {
        let seen = {};
        let duplicatesArray = [];
        for (const value of this.items) {
            if (seen[value]) {
                duplicatesArray.push(value);
            } else {
                seen[value] = true;
            }
        }
        console.log(duplicatesArray);
    }

    reverseString(str) {
        let stack = [];
        for (const character of str) {
            stack.push(character);
        }
        let reverseString = "";
        while (stack.length > 0) {
            reverseString += stack.pop();
        }
        console.log(reverseString);
    }
}

let stackArray = new StackArray();
stackArray.push(20);
stackArray.push(30);
stackArray.push(40);
stackArray.push(40);
stackArray.reverseString("muhammed fazil tv");
stackArray.duplicates();
stackArray.print();

let arr = [1, 2, 3, 2.1];
arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val));
console.log(arr);
