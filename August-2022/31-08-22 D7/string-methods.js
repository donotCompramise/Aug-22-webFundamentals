let str="abcd"
//charCodeAt()
console.log(str.charCodeAt(0))
console.log(str.charCodeAt(2))
console.log(str.length-1)

let str1=`This is string`
//indexOf()
console.log(str1.indexOf('n'))
//lastindexOf()
console.log(str1.lastIndexOf(`str`))
//repeat()
let s="*"
for(let i=0;i<5;i++)
{
    console.log(s.repeat(i))
}
//startsWith()
console.log(str1.startsWith("is"))//false
//ends-with
console.log(str1.endsWith("string"))//true
