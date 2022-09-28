let obj={
    firstName:'bunny',
    secondName:'chandu'
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
//to find desination is exist or not
//1st way.designation property doesn't exist in the object
console.log(obj['firstName'])
//2nd way
console.log(obj.hasOwnProperty('designation'))
console.log(obj.hasOwnProperty('firstName'))

//array have multiple methods