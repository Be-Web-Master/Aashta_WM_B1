// 17. Write a function that takes a positive integer as input and returns the sum of 
// its digits each raised to the power of the number of digits in the original integer.

function sumOfDigitToPower(num){
    let n =""+num, length=n.length, sum=0, rem
     while(n != 0){
        rem = n%10
        sum = sum + Math.pow(rem,length)
        n = Math.floor(n/10)
     }
     console.log(sum)
}
sumOfDigitToPower(123)