// //using for-of loop 
// //we cann't break the for each loop in b/w
// //but for-loop we can break the in b/w
// //for-each loop executed array.length times


// let arr=[9,1,2,3,4,5,6]

// arr.forEach(function(ele){
//     console.log(ele)
// })

// // for(let i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// //     if(i===((arr.length/2)-1)){
// //         console.log(ele,'ele')
// //     }
// // }

// // for(let i=0;i<arr.length;i++)
// // {
// //     sum +=arr[i]
// // }
// // console.log(sum)

// //arr.forEach(function(ele => sum + = ele))

// //reduce
// arr.reduce(function(prevEle,currEle,currIndex,completeArr){
// console.log(prevEle,currEle)
// return  currEle
// },0)//0-initial element
// //let arr=[9,1,2,3,4]
// let sum=0
// console.log(arr.reduce(function(sum,currele,index)
// {
//     return sum+currele
// }))
let arr=[1,2,3,4,5,6]
console.log(arr.reduce(function(prevEle,currEle,index)
{
    if(index < arr.length/2){
        return prevEle+currEle
    }
    else{
        return prevEle*currEle
    }
},0))

let cars=['honda city','ertiga','maruthi']

for(let car of cars){//of only elements are required for business logic
console.log(car)
}

for(let index in cars)//when both elements and indexes are required.
console.log(index)



 let votes=[{'name':'bob','age':30,'voted':true},
 {'name':'bob','age':30,'voted':true},
{'name':'bob','age':30,'voted':false}]
let count=0
// votes.map(function(element){
//     if(element.voted===true)
//     count++;
// })
for(let vote of votes)
{
    if(vote.voted===true)
    count++
}
console.log(count)

let obj={
    name:'bunny',
    email:'sdfghj2@gmail.com'
}
for(let key in obj)
console.log(key)