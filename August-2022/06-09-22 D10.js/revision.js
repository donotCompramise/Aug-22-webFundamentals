let obj={
    'name': 'bunny',
    designaion:'instructor',
    '0bavesh':' hello'

}
//cotations are optional in strings.
console.log(obj['designaion'])
console.log(obj.name)//keys must be string and not inialized with numarical or special characters.
console.log(obj['designaion'])

let arr=[['name','bhavesh','bunny'],['ghj','instructor','java']]
let map={}
for(let i=0;i<arr.length;i++)
{
    let str="";
    for(let j=1;j<arr[i].length;j++)
    {
     str +=arr[i][j]
    }
    map[arr[i][0]]=str
}
console.log(map)