// // linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     prepend(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     print() {
//         let current = this.head;
//         let listValues = "";
//         while (current) {
//             listValues += `${current.value}->`;
//             current = current.next;
//         }
//         console.log(listValues + "null");
//     }

//     firstDelete() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else if (this.head.next === null) {
//             this.head = null;
//         } else {
//             this.head = this.head.next;
//         }
//         this.size--;
//     }

//     lastDelete() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else if (this.head.next === null) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let current = this.head;
//             while (current.next.next !== null) {
//                 current = current.next;
//             }
//             current.next = null;
//             this.tail = current;
//         }
//         this.size--;
//     }

//     valueDelete(val) {
//         if (this.isEmpty()) {
//             console.log('List is empty');
//         } else if (this.head.value === val) {
//             this.head = this.head.next;
//             console.log(`Value ${val} is the head and has been deleted`);
//         } else {
//             let current = this.head;
//             while (current.next && current.next.value !== val) {
//                 current = current.next;
//             }
//             if (current.next) {
//                 current.next = current.next.next;
//                 console.log(`Value ${val} has been deleted`);
//             } else {
//                 console.log(`Value ${val} not found`);
//             }
//         }
//         this.size--;
//     }

//     findMiddle() {
//         if (this.head !== null) {
//             let one = this.head;
//             let two = this.head;

//             while (two && two.next && two.next.next) {
//                 one = one.next;
//                 two = two.next.next;
//             }

//             console.log("Middle value is", one.value);
//         }
//     }
// }

// let list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.size);
// list.prepend(10);
// list.prepend(20);
// list.append(30);
// list.append(40);
// list.prepend(50);
// list.prepend(60);
// list.findMiddle();
// list.print();
// list.firstDelete();
// list.lastDelete();
// list.valueDelete(30);
// list.print();


// // doubbly linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     insertValue(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     printNodes() {
//         let current = this.head;
//         let listValues = "null <- ";
//         while (current) {
//             listValues += `${current.value} <-> `;
//             current = current.next;
//         }
//         listValues += "null";
//         console.log(listValues);
//     }

//     putAfter(x, value) {
//         const newNode = new Node(value);
//         let current = this.head;
//         while (current) {
//             if (current.value === x) {
//                 let temp = current.next;
//                 current.next = newNode;
//                 newNode.prev = current;
//                 newNode.next = temp;
//                 if (temp) {
//                     temp.prev = newNode;
//                 } else {
//                     this.tail = newNode;
//                 }
//                 this.size++;
//                 return;
//             }
//             current = current.next;
//         }
//     }

//     putBefore(x, value) {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//             return;
//         }

//         const newNode = new Node(value);
//         let current = this.head;
//         while (current) {
//             if (current.value === x) {
//                 newNode.next = current;
//                 newNode.prev = current.prev;
//                 if (current.prev) {
//                     current.prev.next = newNode;
//                 } else {
//                     this.head = newNode;
//                 }
//                 current.prev = newNode;
//                 this.size++;
//                 return;
//             }
//             current = current.next;
//         }
//     }

//     removeDuplicates() {
//         let current = this.head;
//         while (current) {
//             let runner = current;
//             while (runner.next) {
//                 if (runner.next.value === current.value) {
//                     runner.next = runner.next.next;
//                     if (runner.next) {
//                         runner.next.prev = runner;
//                     } else {
//                         this.tail = runner;
//                     }
//                     this.size--;
//                 } else {
//                     runner = runner.next;
//                 }
//             }
//             current = current.next;
//         }
//     }

//     ascendingSort() {
//         let current = this.head;
//         while (current) {
//             let runner = current.next;
//             while (runner) {
//                 if (current.value > runner.value) {
//                     let temp = current.value;
//                     current.value = runner.value;
//                     runner.value = temp;
//                 }
//                 runner = runner.next;
//             }
//             current = current.next;
//         }
//     }

//     reverse() {
//         let current = this.head;
//         while (current) {
//             let temp = current.next;
//             current.next = current.prev;
//             current.prev = temp;
//             if (!temp) {
//                 this.tail = this.head;
//                 this.head = current;
//             }
//             current = temp;
//         }
//     }
// }

// const list = new DoublyLinkedList();
// list.insertValue(30);
// list.insertValue(50);
// list.insertValue(30);
// list.insertValue(40);
// list.putAfter(40, 45);
// list.putBefore(40, 35);
// list.putBefore(50, 10);
// list.removeDuplicates();
// list.ascendingSort();
// list.printNodes();
// list.reverse();
// list.printNodes();
