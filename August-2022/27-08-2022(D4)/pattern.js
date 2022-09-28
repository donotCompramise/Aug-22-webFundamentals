let string="";
function pattern(val)
{
    for(let i=0;i<val;i++)
    {
        for(let j=0;j<=i;j++)
        {
            string +="# "
        }
       string +="\n"
    }
}
pattern(5)
console.log(string)