// function call(){
//     a=function(){
//         console.log('a')
//         return this
//     }
//     b=function(){
//         console.log('b')
//         return this
//     }
//     c=function(){
//         console.log('c')
//         return 'hello'
//     }
//     return this
// }
// call().a().b().c()

//arrpw function
function call(){
    a=()=>{
        console.log('a')
        return this
    }
    b=()=>{
        console.log('b')
        return this
    }
    c=()=>{
        console.log('c')
        return this
    }
    return this
}
console.log(call().a().b().c())