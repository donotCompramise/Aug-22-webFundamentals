let s=""
function reverse(str){
    for(let i=0;i<str.length;i++)
    {
        s =str.charAt(i)+s
    }
return s

}
console.log(reverse("bunny"))