

let s='abcd'
//console.log(s)

s='asdfghj'
console.log(s)

let num = 3
s =`abcd${num ? num : 5}`
console.log(s)

var str="hello world world world"
console.log(str.substr(1,4))
//trim function
let str1="     hello holiday    "
console.log(str1)
console.log(str1.trim())
console.log(str1.trim().length)


//substring(starting_index,number of characters)
//substring(ind1,ind2)
console.log(str.substring(1,9))
//substr(start-index,ending-index)
console.log(str.substr(1,4))

//include function
console.log(str.includes("hello")) 
// it will display the boolean like true or false

//replace function
console.log(str.replaceAll("world","welcome")) 
// replace the string.

while(str.includes('world'))
{
    str = str.replace('world','welcome')
}
console.log(str)
function demo()
{
    arr=arguments
    arr1=arguments[3]
    console.log(arr)
       console.log(arr1)
       console.log(typeof arr)
}
demo(1,2,3,4)

