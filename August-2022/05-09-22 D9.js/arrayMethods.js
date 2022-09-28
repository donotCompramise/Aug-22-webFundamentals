
//push and pop()
//push(element):-insert the element into the last position if the 
//existing an array
//pop()-removing the last array element and returning it.



 let arr=[1,2,3,[45678,89]]
// let arr2=[33,22]
// let obj={
//     lang:"jaascript",
//     type:"oops"

// }
// arr.push(arr2)
// console.log(arr);
// let top=arr.pop()
// console.log(arr);
// console.log(top)
// arr.push(obj)
// console.log(arr)


// //splice:-to modify the array elements.-to insert/delete
//  let arr3=[1,2,3,4,5]
//  //arr_name.splice(index1,value):-syntax
//  arr3.splice(3,2)
//  //splice method the fistr index is starting the of the array element
//  //and 2nd index is used to how many elements do you want delete.
//  console.log(arr3)

 //nested array
 let arr4=[1,2,3,[2,3,4,5],'javaScript']
        //   -5-4-3   -2           -1
 //arr4[3].splice(1,3)
 arr4.splice(-2,5)//it will from last position of the array.

 console.log(arr4)
 //insert the array elements.
 //arr.splice(index,value(delete how many elements.),elements)-syntax
//  arr.splice(1,1,'hello','world')
//console.log(arr)


//spread operator(...):-spreading all the elements of array.

let arr5=['hello','world','javascript',...arr]
let arr6=[...arr,'hello','world','javascript']
console.log(arr6)
console.log(arr6[0])
console.log(arr5)

//1.convert the array into an object
//2.flatten the array.
//convert the array into primitive types.



