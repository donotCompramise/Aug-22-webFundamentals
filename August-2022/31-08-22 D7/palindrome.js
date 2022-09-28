// function palindrome(str){
//     for(let i=0;i<str.length;i++)
//     {
//         if(str.charAt(i)!=str.charAt(str.length-1-i))
//             return false
        
//     }
//     return true
// }
// console.log(palindrome(`madam`))

function palindrome(str){
    let end=str.length
    let start = 0
    while(start<end)
    {
        if(str.charAt(start)!=str.charAt(end-1))
            return false
        start++;
        end--
    }
    return true
}
console.log(palindrome(`madam`))