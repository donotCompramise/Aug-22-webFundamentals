// our own split function
function split(actualString, splitString)
{
    let answer = []
    let temp = ""
    for(let i=0;i<actualString.length;i++)
    {
       const splitStringLength = splitString.length
       const subStringOfActualString = actualString.substr(i,splitStringLength)
       if(subStringOfActualString !== splitString)
       {
        temp += actualString[i]
       } 
       else{
        answer.push(temp)
        temp=""
        i +=splitStringLength-1;
       }
       
    }
    answer.push(temp)
    return answer
}
console.log(split("who is honey","ho"))