let arr=[1,2,3,4,5,6]

let a=arr.reduce(demo ,0)

function demo(prevEle,currEle)
{//sum of even numbers
//     if(currEle%2===0)
//     return prevEle+currEle

//     return prevEle
//sum of odd numbers
if(currEle%2===0)
return prevEle

    return prevEle+currEle

}
console.log(a)

