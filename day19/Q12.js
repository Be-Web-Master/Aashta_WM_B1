// Implement a function that uses the reduce method to calculate the
//  sum of all elements in an array.

function array(num){
    const inputArr =[]
    for(let i=0;i<=num;i++){
        inputArr.push(i)
    }
    // console.log(i)
    return inputArr
}
let arr=array(4)
let initValue =0
const arr1 = arr.reduce((acc,currentValue)=>{
    return acc + currentValue
},initValue)
console.log(arr1)