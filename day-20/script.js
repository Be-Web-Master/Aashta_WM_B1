//Q1.Create a function that takes a number and returns a string representation with exactly 2 digits after the decimal point. (Method: .toFixed())
// function numStr(num){
//     return num.toFixed(2)
// }
// // console.log(typeof(numStr(5.8665)))
// console.log(numStr(5.8665))

//Q2.Write a function that takes a number and returns a string representation with 3 significant digits. (Method: .toPrecision())
// function numStr(num){
//     return num.toPrecision(3)
// }
// console.log(numStr(123.588))

//Q3.Implement a function that takes a number in form of string and returns its integer value. (Method: .parseInt())
// function numStr(num){
//     return Number.parseInt(num)
// }
// console.log(numStr(123.588))

//Q4.Create a function that takes a number in form of string and returns its floating-point value. (Method: .parseFloat())
// function numStr(num){
//     return Number.parseFloat(num)
// }
// console.log(numStr(15))

//Q5.Write a function isFinite , that returns true if a given number is finite. (Method: .isFinite())
// function isFinite(num){
//      return Number.isFinite(num)
// }
// console.log(isFinite(562))

//Q6.Implement a function that checks if a given value is an integer. (Method: .isInteger())
// function checks(num){
//     return Number.isInteger(num)
// }
// console.log(checks(568))

//Q7.Create a function that checks if a given value is not a number. (Method: .isNaN())
// function checks1(num){
//     return Number.isNaN(num)
// }
// console.log(checks1(568))

//Q8.Write a function that checks if a given value is within the safe integer range in JavaScript. (Method: Number.isSafeInteger())
// function checks(num){
//     return Number.isSafeInteger(num)
// }
// console.log(checks(562))

//Q9.Create a function that takes a number as input and checks if it is within the range of the largest and smallest floating-point numbers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_VALUE, Number.MIN_VALUE)
// function checks(num){
//     let maxNum=Number.MAX_VALUE, minNum=Number.MIN_VALUE
//   if(num <= maxNum && num >= minNum){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(checks(55))

//Q10.Write a function that takes a number as input and checks if it is within the range of the largest and smallest integers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
// function checks(num){
//     let maxNum=Number.MAX_SAFE_INTEGER,
//         minNum=Number.MIN_SAFE_INTEGER
//     if(num <= maxNum && num >= minNum){
//         return true
//     }else{
//         return false
//     }
//  }
//  console.log(checks(-55))

//Q11.Implement a function that takes a number as input and returns true if it equals negative infinity, otherwise return false. (Method: Number.NEGATIVE_INFINITY)
// function checks(num) {
//     let negativeInfinity = Number.NEGATIVE_INFINITY
//     if (num === negativeInfinity) {
//        return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checks(-Number.MAX_VALUE * 2))
// console.log(checks(-Number.MAX_VALUE))

//Q12.Create a function that takes a number as input and returns true if it equals positive infinity, otherwise return false. (Method: Number.POSITIVE_INFINITY)
function checks(num) {
        let positiveInfinity = Number.POSITIVE_INFINITY
        if (num === positiveInfinity) {
           return true
        }
        else{
            return false
        }
    }
    console.log(checks(Number.MAX_VALUE * 2))
    console.log(checks(Number.MAX_VALUE))