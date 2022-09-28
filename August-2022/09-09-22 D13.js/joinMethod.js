let str=["i am bunny" ,"whats ur name"]
str.join('_')
console.log(str)

//last index
let arr=["bunny",7,8,9,"hello"]
console.log(arr.at(-1))// last index of array

//
let arr1= ['a','b','d','c']
console.log(arr.sort(function(a,b)
{
    const asciiOfA =a.charCodeAt(0)
    const asciiOfB =b.charCodeAt(0)
    if(asciiOfA>asciiOfB)
        return 1
    else if(asciiOfA < asciiOfB)
    return -1
    else if(asciiOfA===asciiOfB)
    return 0
}))
