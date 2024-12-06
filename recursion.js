
// function f(n) {
//     if (n <= 1) {
//         return
//     }
//     f(n - 1);
//     console.log(n);
//     f(n - 1);
// }


// function print(n){
//     console.log(n);
//     print(n+1);

// }
// print(5);


// function countdown(n) {
//     if (n <= 0) {
//         console.log("Blastoff!");
//         return;
//     }
//     console.log(n);
//     countdown(n - 1);
// }

// countdown(10);


// function fibonaccinumber(n){
//     if(n <= 1){
//         return n;
//     } else {
//         return fibonaccinumber(n - 1) + fibonaccinumber(n - 2);
//     }
// }
// console.log(fibonaccinumber(9));


// sum of the arrey

// let sum = 0 ; 
// function sumofarrey(arrey){

//     if(arrey.length===0){
//         return sum
//     }else{
//         sum +=arrey[0]
//         return sumofarrey((arrey.splice(1)))
//     }
// }

// let arr = [1,2,3,4,5];
// console.log(sumofarrey(arr));



// let sum = 0 ; 
// function sumofarrey(arr){

//     if(arr.length===0){
//         return sum;
//     }else{
//          sum += arr[0];
//         return sumofarrey(arr.splice(1));
//     }

// }
// let arr = [1,2,3,3,5,6,8,9]
// console.log(sumofarrey(arr))





// factorial of the paramiter


// function arrayRec(val) {
//     let sum = 1
//     if (val === 0) {
//         return sum;
//     } else {
//         sum *= val;
//         return arrayRec(val - 1);
//     }
// }
// console.log(arrayRec(5));

// function arreyrec(val){
//     let sum = 1
//     if(val===0){
//         return sum
//     }else{
//         sum *=val
//         return arreyrec(val-1)

//     }

// }
// console.log(arreyrec(5));



// reverce the string


// function reverseString (str){
//     if(str.length===0){
//         return str
//     }else{
//         return reverseString(str.slice(1))+str[0]
//     }
// }






// //--Fibonacci-- Time: O(2n)T  Space: O(n)S 

// // fibonacci series = [0,1,1,2,3,5,8,13,21,34,55,89]

// function fibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log("fibonacii of 8",fibonacci(8)); // 21/
// console.log("fibanocii of 3",fibonacci(3)); // 3
// console.log("fibanocii of 5",fibonacci(5)); // 5



// // --Factorial--Time: O(n)T  Space: O(n)S 

// function factorial(n) {
//     if (n < 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log("factorial of 8",factorial(8)); //  40320
// console.log("factorial of 3",factorial(3)); //  6
// console.log("factorial of 5",factorial(5)); // 120




// // --Binary Search--Time: O(logn)T  Space: O(Logn)S 

// function recursiveBinarySearch(arr, target) {
//     return binarySearch(arr, target, 0, arr.length - 1);
// }

// function binarySearch(arr, target, start, end) {
//     if (start > end) {
//         return -1;
//     }

//     let middle = Math.floor((start + end) / 2);

//     if (target === arr[middle]) {
//         return middle;
//     }

//     if (target < arr[middle]) {
//         return binarySearch(arr, target, start, middle - 1);
//     } else {
//         return binarySearch(arr, target, middle + 1, end);
//     }
// }

// console.log("Binary Search :",recursiveBinarySearch([4, 5, 6, 8, 9, 10, 34, 43, 52], 52));



// function reverseString(str) {
//     if (str.length <= 1) {
//         return str;
//     }

//     return reverseString(str.slice(1)) + str[0];
// }
// console.log("Reversed string",reverseString("hai"));


// class Node {
//     constructor(value){
//         this.value = value ;
//         this.next = null
//     }

// }

// class linkedlist{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     addinganode(value,index){

//         let newnode = new Node(value);

//         let current = this.head;

//         if(this.head===null){
//             addvalue(value){
//                 this.head =newnode
//                 this.size++
//             }

//             }else{
//                 while(current){
//                     if(current.value===index){

//                        newnode.next = current;
//                        current = newnode;
//                        this.size++

//                     }
//                     current = current.next


//                 }



//             }
//         }

//     }



// function binarySearch(arr, tar) {

//     return search(arr, tar, 0, arr.length - 1);

// }

// function search(arr, tar, left, right) {

//     if (left <= right) {
//         let midd = Math.floor((left + right) / 2);

//         if (arr[midd] === tar) {
//             return midd
//         }
//         if (arr[midd] < tar) {
//             return search(arr, tar, midd - 1, right)
//         } else {
//             return search(arr, tar, left, midd + 1);
//         }
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(binarySearch(arr, 3));
