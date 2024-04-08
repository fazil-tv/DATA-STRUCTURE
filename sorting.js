// let arr = [34,34,23,24,3,-4,434,2,32,42,4];

// // mrege arrey
// function megsort(arr){

//     if(arr.length<=1){
//         return arr
//     }
//     let midd = Math.floor(arr.length/2)
//     let left = arr.slice(0,midd)
//     let right = arr.slice(midd)
//     return merge(megsort(left),megsort(right))
// }

// function merge(left,right){
//     let sortedarrey = []
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sortedarrey.push(left.shift())
//         }else{
//             sortedarrey.push(right.shift())
//         }
//     }
//     return [...sortedarrey,...left,...right]
// }
// console.log(megsort(arr))



// merge sort

// function mergearrey (arr){

//     if(arr.length<=1){
//         return arr;
//     }

//     let midd = Math.floor(arr.length/2);
//     let left = arr.slice(0,midd)
//     let right = arr.slice(midd);


//     return merge(mergearrey(left),mergearrey(right));
// }

// function merge(left,right){

//     let mergedarrey = []

//     while(left.length&&right.length){

//         if(left[0] <= right[0]){

//             mergedarrey.push(left.shift());
//         }else{
//             mergedarrey.push(right.shift())
//         }
//     }


//     return [...mergedarrey,...left,...right];

// }

// let arr = [10,1,2,3,4,-4]

// console.log(mergearrey(arr))







// quck sort

// function qucksort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []


//     for(let i= 0 ; i< arr.length-1 ; i++){

//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [...qucksort(left),pivot,...qucksort(right)]
// }
// let arr = [1, 9, 43, 3, 3, 5];
// console.log(qucksort(arr));



// selection sort



// function selectionsort(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         let min = i

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[j] < arr[min]) {

//                 min = j

//            }
//         }

//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }

// arr=[1,3,23,2,3,2,3,-3 ]
// console.log(selectionsort(arr))



// bubble sort

// function bubblesort(arr){

//     for(let i = 0 ; i<arr.length ; i++){
//         for(let j = 0 ; j <arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// arr=[1,3,23,2,3,2,3,-3 ]
// console.log(bubblesort(arr))




// insertion sort

// function insertionsort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     return arr;
// }

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(insertionsort(arr));
