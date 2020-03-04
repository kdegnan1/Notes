// function binarySearch(array, target) {
//     if (array.length < 1) return -1

//     let num = Math.floor(array.length / 2);
//     let midpoint = array[num];
//     let left = array.slice(0, num);
//     let right = array.slice(num + 1)
// debugger 
//     if (target === midpoint) {
//         debugger
//         return num;
//     } else if (target < midpoint) {
//         debugger
//         return binarySearch(left, target);
//     } else if (target > midpoint) {
//         debugger
//         const subRes = binarySearch(right, target);
//         debugger
//         return subRes === -1 ? -1 : subRes + num + 1;
//         debugger
//     }
//
//
// }

// console.log(binarySearch([1,5,23,111], 111))

// 2.Product sum 

// function productSum(array, multiplier = 1) {
//     let sum = 0;
//     // debugger
//     for (i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             sum += productSum(array[i], multiplier + 1);
//         } else {
//             sum += array[i];
//         }
//     }
// // debugger
//     return sum * multiplier;
// }

// console.log(productSum([5,2,[7,-1],3,[6,[-13,8],4]]))

//

//First Large Three 

// function findThreeLargestNumbers(array) {
//     const sort1 = array.sort(function (a, b) {
//         return a - b;
//     });
//     let finish = array.length;
//     let start;
//     if (array.length - 3 > 0) {
//         start = array.length - 3;
//         return sort1.slice((start), (finish))
//     } else {
//         return sort1;
//     }
//     // return sort1.slice((start), (finish))
// }

// practicing 