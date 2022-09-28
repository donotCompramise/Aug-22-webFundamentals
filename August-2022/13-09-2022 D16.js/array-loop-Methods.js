// //1.map
// //2.filter
// //3.foreach
// //4.reduce
// //these are methods contains two kinds of forloop

// let arr=['bavesh','shubam','bathula']

// arr.map(function(element,index,array){
//     console.log(element,index,array)
// })
// //
// let arr1=[1,2,3,4,5]
// for(let i=0;i<arr1.length;i++)
// {
//     arr1[i]=arr1[i]*arr1[i]
// }
// console.log(arr1)

// console.log(arr1.map(ele => ele*ele))
//arr1=arr1.map(ele => ele*ele)

let arr2=[1,2,3,4,5,6,7,8,9]
let arr3=[]
let j=0
for(let i=0;i<arr2.length;i++,j++)
{
    if(arr2[i]%2===0)
    arr2.splice(i,1)
}
console.log(arr2)

const persons=[{firstname:'malcom',lastname:'Reynolds'},
{firstname:'malcom',lastname:'Reynolds'},
{firstname:'malcom',lastname:'Reynolds'}
]
let personsFullnames = persons.map(function(element){
    return element.firstname+" "+element.lastname;
})
console.log(personsFullnames);

//using for-of loop 
//we cann't break the for each loop in b/w
//but for-loop we can break the in b/w

