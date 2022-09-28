//let array=[['name','bunny'],[]]
let array2=[[1,2,3,4],[4,5,6],[7,8,9]]
let obj={}
for(let i=0;i<array2.length;i++)
{
    let sum=0;
    for(let j=0;j<array2[i].length;j++)
    {
    sum = sum + array2[i][j];
    }
    obj[i]=sum
}
//console.log(obj);


//  function sumArr(len){
//     let sum1=0
//     for(let i=0;i<len.length;i++)
//     {
//         sum1 +=len[i]
//     }
//     return sum1
//  }
//  let arr=[10,20,30,40]
//  console.log(sumArr(arr))
    



