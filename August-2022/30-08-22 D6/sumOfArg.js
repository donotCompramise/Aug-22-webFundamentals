function sum(){
    console.log(arguments)
    let answer=0
    for(let i=0;i<arguments.length;i++)
    {
        answer +=arguments[i]
        console.log(arguments)
    }
    return answer
}
console.log(sum(1,2,3,4,5,6,7,8,9))