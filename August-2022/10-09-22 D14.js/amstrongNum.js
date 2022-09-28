var res=0;
let amstrong=(num)=>{
    let temp=num
    while(num>0)
    {
        let rem=num%10
        res=res+(rem*rem*rem)
        num=parseInt(num/10)
    }
    console.log(res)
    if(res==temp)
    return "yes"
    else return "no"
    
}
console.log(amstrong(153))