//splice-used to modify the array-add/remove
//var_name.splice(index,num_of_elements,arg1,arg2,arg3,....)
const arr = [1,2,3,4,5]
const slicedArr= arr.slice(1,2)

console.log(arr)
console.log(slicedArr)

arr.splice(1,2, ...slicedArr)
console.log(arr)
