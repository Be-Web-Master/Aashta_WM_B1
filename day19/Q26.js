//26.Write a program to swap the first and last digits of a number.
function array(num){
    const inputArr =[]
    for(let i=0;i<=num;i++){
        inputArr.push(i)
    }
    // console.log(i)
    return inputArr
}
let arr=array(4)
function swapNumber(arr){
    let a=arr[0], b=arr[arr.length-1], temp
    temp=a
    a=b
    b=temp
    console.log(a)
    console.log(b)
    // console.log(arr)
}
swapNumber(arr)