// Write a function that takes an array of numbers and returns a new array containing
//  only the prime numbers using the filter method
function array(num){
    const inputArr =[]
    for(let i=0;i<=num;i++){
        inputArr.push(i)
    }
    // console.log(i)
    return inputArr
}
let arr=array(5)
function isPrimeNo(elem){
    for(let i=2;i<elem;i++){
        if(elem%i === 0){
           return false
        }
        else{
            return elem >1
        }
    }
}
console.log(arr.filter(isPrimeNo))
