// let arr=[1,2,3,4,4,5,6,7]
// //slice
// console.log(arr.slice(1,3))//substring//making a copy of elements.
// //splice
// console.log(arr.splice(0,2))//substr//remove elements
// //
// let emptyArr=[1,2,3,4,5]

// emptyArr.splice(0,5)
// console.log(emptyArr)//[] emptyArr.

let arrlen=[1,2,3,4,5,6]
//let
for(let i=0;i<=arrlen.length;i++)
{
    console.log(arrlen.slice(0,i));
}
// // output
// // [ 1 ]
// // [ 1, 2 ]
// // [ 1, 2, 3 ]
// // [ 1, 2, 3, 4 ]
// // [ 1, 2, 3, 4, 5 ]
// // [ 1, 2, 3, 4, 5, 6 ]

let arrlen1=[1,2,3,4,5,6]
// //let
// for(let i=0;i<=arrlen1.length;i++)
// {
//     console.log(arrlen1.slice(i,arrlen1.length))
// }

//splice
//arrlen1.splice(1,2,9,10,2,3,45)
//console.log(arrlen1)

//time-complexity

//shift,unshift-O(n)
//push,pop()-O(1)
// arrlen1.shift()
// console.log(arrlen1)
// //unshift
// arrlen1.unshift(1)
// console.log(arrlen1)
// //reverse arry-O(n)
// console.log(arrlen1.reverse())
// //arr1=[1,2,3,4],arr2=[5,6,7,8]
// //[1,2,3,5],[1,2,5,6],[1,5,6,7],[5,6,7,8]

let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
for(let i=0;i<arr2.length;i++)
{
arr1.splice(arr1.length-1,1)//arr1.pop()
let additiionArray= arr2.slice(0,i+1)
console.log(arr1.concat(additiionArray))//concat time complexti -O(n)
}
//time-complexity-O(n^2)


