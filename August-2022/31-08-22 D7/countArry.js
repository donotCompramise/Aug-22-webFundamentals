
/* function count(arr){
    let freq={}
    for(let i=0;i<arr.length;i++)
    {
    freq[arr[i]]=(freq[arr[i]] || 0)+1
    }
    console.log(freq);
    console.log(typeof freq)
}
count([1,2,3,4,2,1,3,4,2,2,1,3,4,5])
*/

//normal-function.
function count1(array) {
let freq={}

for(let i=0;i<array.length;i++)
{
    if(freq[array[i]])
    {
        freq[array[i]]++
    }
    else
    freq[array[i]]=1
}
console.log(freq)
}
count1([1,2,3,4,2,1,3,4,2,2,1,3,4,5])


//arrow-function
let count=array => {
    const map={}
    array.forEach(item => {
        if(map[item])
        {
            map[item]++
        }
        else
        map[item]=1
    });
    return map
}
console.log(count([1,2,3,4,2,1,3,4,2,2,1,3,4,5]))
    
