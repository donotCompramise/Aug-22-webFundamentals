let obj={
    name :"bavesh",
    experience:0,
    4:"abc"
   // name:Bunny

}
console.log(obj)

console.log(obj.name)
console.log(obj['name'])//
console.log(obj[4])

let arr=[1,2,3]
console.log(typeof arr)
let arr2=[{0:'Bunny'}]
console.log(arr2[0][0])
let obj2={
    0:{
        name:"Bunny"
    },
    experience:0
}
console.log(Object.keys(obj2))//Arrays of keys will print
console.log(Object.values(obj2))//Arrays of values will print
console.log(Object.keys(obj2[0])) //Arrays of keys of nested object
console.log(Object.values(obj2[0]))//arrays of values of nested object