let obj={
   // key:value
   name:"Bunny",
   age:25,
   add:"USA"
}
var arr1=[1,2,obj]

let obj2={
    name:"chandu",
    propObj:obj ,//netsed object
    prop2:arr1
}
//keys can be numbers and Strings
//values can be object, array or num or String.
//Object.keys(object_name) by using statement we can get the all keys of obj.
//Object.values(object_name) by using statement we can get the all values of obj.
//Arrays are object with keys as a numaric values
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(obj2)
// console.log(obj2.propObj)
// console.log(obj2.propObj.age)//only got the age
//var arr=[1,2,3]
//return type of
//var arrObj=new Array(Object.keys(obj2))
console.log(arrObj)
var arrObj=new Array(Object.keys(obj2.propObj))

console.log(obj2)

console.log(obj2.prop2[2])//accessing array elements by using obj2 properties
console.log(obj2.prop2)
console.log(obj2.prop2[2].name)// getting the name by using obj2 property and array.

