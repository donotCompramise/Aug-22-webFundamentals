//[['a',2]['b',3]]=>{'a':2,'b':3}
let arr=[['a',1],['b',1],['c',45]]

let map={}
for(let i=0;i<arr.length;i++)
{
     map[arr[i][0]]=arr[i][1] 
}
console.log(map)
// 
//2) convert array to primitive datatypes.
//i/p:-[1,'abc',[1,2,3]]
//o/p: 1,abc,1,2,3

let arr1=[1,'abc',[1,2,3]]
console.log(arr1.toString())


//flatten array
//i/p:-[1,[2,3,[4,5],[6,7,[8,9]]]]
//o/p:-[1,2,3,4,5,6,7,8,9]

// 1st way
 arr2=[1,[2,3,[4,5],[6,7,[8,9]]]]

 let str=arr2.toString()
 let ans=str.split(",")
for(let i=0;i<ans.length;i++)
{
    ans[i]=Number(ans[i])
}
 console.log(ans)

 //2nd way
 let newans =[].concat(...arr2)
 console.log(newans)//it is not worked see on later classes.
