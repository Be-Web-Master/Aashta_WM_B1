// 13. Write a program that finds the maximum value in an array of 
// numbers using the reduce method.

function array(num){
    const inputArr =[]
    for(let i=0;i<=num;i++){
        inputArr.push(i)
    }
    // console.log(i)
    return inputArr
}
let arr=array(10)
let initValue =0
const arr1 = arr.reduce((acc,currentValue)=>{
    if(currentValue>acc){
        return currentValue
    }
    return acc
},initValue)
console.log(arr1)