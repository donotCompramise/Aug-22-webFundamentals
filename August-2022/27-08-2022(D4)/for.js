for(let i=0;i<10;i++){
if(i===5){
//continue //skip 5 then print rest of the numbers
break;
}
console.log(i);
}
let arr=[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}