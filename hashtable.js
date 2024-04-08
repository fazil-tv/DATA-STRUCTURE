// class hashtable {
//     constructor(size) {
//         this.size = size;
//         this.items = new Array(size);
//     }

//     hash(key) {
//         let hashkey = key.toString(); 
//         let hashedVal = 0;
//         for (let i = 0; i < key.length; i++) {
//             hashedVal += hashkey.charCodeAt(i);
//         }
//         return hashedVal % this.size;
//     }

//     set(key, val) {
//         const index = this.hash(key);
//         if (!this.items[index]) {
//             this.items[index] = [];
//         }
//         const bucket = this.items[index];
//         let samekeyitem = bucket.find(items => items[0] === key);
//         if (samekeyitem) {
//             samekeyitem[1] = val;
//         } else {
//             bucket.push([key, val]);
//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         return this.items[index];
//     }

//     print() {
//         for (let i = 0; i < this.items.length; i++) {
//             if (this.items[i]) {
//                 console.log(i, this.items[i]);
//             }
//         }
//     }

//     remove(key) {
//         const index = this.hash(key);
//         this.items[index] = undefined;
//     }
// }

// let hash = new hashtable(10);
// hash.set("name", "fazil");
// hash.print();



// // find duplicats


// function findDuplicates(arr) {
//     const newTable = new hashtable(arr.length);
//     const duplicates = [];
//     for (const char of arr) {
//         if (newTable.get(char) !== undefined) {
//             duplicates.push(char);
//         } else {
//             newTable.set(char, 1);
//         }
//     }
//     console.log(duplicates);
// }
