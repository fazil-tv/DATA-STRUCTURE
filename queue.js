// //implemented for a queue using a linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class qlist {
//     constructor() {
//         this.top = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enqueue(value) {
//         const newnode = new Node(value);
//         if (this.top === null) {
//             this.top = newnode;
//             this.tail = newnode;
//         } else {
//             this.tail.next = newnode;
//             this.tail = newnode;
//         }
//         this.size++;
//     }

//     dequeue() {
//         if (this.top === null) {
//             console.log("Queue is empty");
//             return;
//         }
//         this.top = this.top.next;
//         this.size--;
//         if (this.top === null) {
//             this.tail = null;
//         }
//     }

//     print() {
//         let curr = this.top;
//         while (curr) {
//             console.log(curr.value);
//             curr = curr.next;
//         }
//     }

//     duplicates() {
//         let duplicatsarrey = [];
//         let seen = {};

//         for (const item of this.items) {
//             if (seen[item]) {
//                 duplicatsarrey.push(item);
//             } else {
//                 seen[item] = true;
//             }
//         }
//         return duplicatsarrey;
//     }
// }

// const quelist = new qlist();
// quelist.enqueue(20);
// quelist.enqueue(40);
// quelist.dequeue();
// quelist.print();


// //implementation of a queue using an array

// class que {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(value) {
//         this.items.push(value);
//     }

//     deque() {
//         return this.items.shift();
//     }

//     print() {
//         console.log(this.items);
//     }

//     reverse() {
//         if (this.items.length === 0) {
//             return;
//         }
//         let frontElement = this.deque();
//         this.reverse();
//         this.enqueue(frontElement);
//     }
// }

// const queue = new que();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();
// queue.reverse();
// queue.print();


// //implementation of a queue using an object 

// class queobject {
//     constructor() {
//         this.items = {};
//         this.front = 0;
//         this.back = 0;
//     }

//     enqueue(value) {
//         this.items[this.back] = value;
//         this.back++;
//     }

//     dequeue() {
//         if (this.front === this.back) {
//             console.log("Queue is empty. Cannot dequeue.");
//             return;
//         }
//         delete this.items[this.front];
//         this.front++;
//     }

//     print() {
//         console.log(this.items);
//     }
// }

// const queue = new queobject();

// queue.enqueue(20);
// queue.enqueue(50);
// queue.enqueue(40);
// queue.print();
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.print();
