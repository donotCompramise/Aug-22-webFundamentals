// let arr=[[1],[2],[5],[3],[8],[9]]
// console.log(arr.sort(function(a,b)
// {
//     if(a>b)
//     return 1
//     else if(a===b)
//         return 0
//     else 
//     return -1

// }))

// let arr1=[{value: 3},{value:2},{value:1},{value:5}]
// console.log(arr1.sort(function(a,b)
// {
//     if(a.value>b.value)
//     return +1
//     else if(a.value===b.value)
//     return 0
//    fvvvvhS2 else 
//     return -1

// }))

let obj={
    subjects:['math','english','hindi','science'],
    marks:[95,80,88,92]
}
obj.subjects=obj.subjects.sort(function(a,b)
{
    const marksOfA=getMarks(a)
    const marksOfB=getMarks(b)
    if(marksOfA > marksOfB)
    return +1
    else if(marksOfA < marksOfB)
    return -1
    else return 0
})
function getMarks(subject)
{
    const indexOfSubjects =obj.subjects.indexOf(subject)
    const marksOfSubject = obj.marks[indexOfSubjects]
    return marksOfSubject
}

obj.marks = obj.marks.sort(function(a,b)
{
    if(a>b) return +1
    else if(a<b) return -1
    else return 0
})
console.log(obj)

