// Modify an array of numbers using the forEach loop to double each value in place.
function array(num){
    const inputArr = []
    for(let i=0;i<=num;i++){
        inputArr.push(i)
    }
    console.log(inputArr)
    return inputArr
}
let arr=array(5)
arr.forEach((elem)=>{
   console.log(elem*=2)
})