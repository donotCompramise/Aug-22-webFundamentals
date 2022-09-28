function print(statement){
    console.log(statement)
}
print("hello")

function sum1(a,b)// it will take only 1,2 
{
    console.log(a+b)
}
sum1(1,2,3)

function sum2()
{

}

function sum3(a,b=2)  // it will take b=2 bcz u didnot passed anything
{
    console.log(a+b)
}
sum3(1)

function sum4(a,b=3)  // it will not take b=3 bcz we passed argument 
{
    console.log(a+b)
}
sum4(2,4)

function sum5(a,b,c)  // 2+undefined
{
    console.log(b+c)
}
console.log(sum5(1,2))  // undefined

function square(num)
{
    return num*num
   // console.log(num*num)

}
console.log(square(2))

// 1.first-order-function
const abc=function(){
    console.log('abc')
}
console.log(square)//it also first order function.
console.log(abc)


//2.high order function
function highOrder(abc2){
    console.log(abc2,"abc2")
    abc2()
}//the function those have function as a parameter are known as high order
highOrder(abc) //abc is a function

//arrow function
//it contains single statement no need create paramenter bracket 
//and no need to create paraanthesis
const singleArguement = arg => console.log("arg")

const arrow = () => {
    console.log("i am a arrow function")
}
arrow()
const arr= () => {}
console.log(arr())




