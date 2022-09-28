//post increment

let num=3
console.log(num++)//3
console.log(num)//4

//pre-increment
let num1=3
console.log(++num1)//4
console.log(num1)//4
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum1=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2===0){
        sum1 +=arr[i]
    }
}
console.log(sum1)