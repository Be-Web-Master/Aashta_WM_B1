//Q1.Count the occurrences of a value in an array
// — create a function that takes 2 args: arr, value
// — this function returns a number, that is count of number of times the value has appeared in arr

// function arraycount(arr,val){
//     let count=0
//     // for(let i=0;i<arr.length;i++){
//     //     if(val===arr[i]){
//     //         count++
//     //     }
//     // else{
//     //     return count=0
//     // }
//     // }
//     arr.forEach(elem => {
//         if(val === elem){
//           count++
//         }else{
//         return count =0
//         }
//     });
//     // for (const elem of arr) {
//     //     if(val === elem){
//     //         count++
//     //     }
//     //     else{
//     //         count = 0
//     //     }
//     // }
//     return count
// }
// console.log(arraycount([1,2,58,1,5,0],6))

//Q2.Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr

// function arrayoccurence(arr,val){
//    let indices=[]
// //    for(let i=0;i<arr.length;i++){
// //     if(val === arr[i]){
// //         indices.push(i)
// //     }
// //    }
// arr.forEach((elem,idx) => {
//     if(val === elem){
//         indices.push(idx)
//     }
// });
//    return indices
// }
// console.log(arrayoccurence([1,5,2,8,6],5))

//Q3.Get the unique values of an array
// — create a function that takes 1 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

// function arrUniqueValue(arr){
//      let obj={}
//     //  for(let i=0;i<arr.length;i++){
//     //   obj[arr[i]]=1
//     //  }
//     arr.forEach((el,idx,arr) => {
//         obj[el]=1
//     });
//      return obj
// }
// console.log(arrUniqueValue([1,5,58,258,1,1,2]))

//Q4.Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

// function compareArray(arr1,arr2){
//     let check = false
//     if(arr1.length === arr2.length){
//     for(let i=0;i<arr2.length;i++){
//       if(arr1[i] === arr2[i]){
//         return check = true
//       }
//       else{
//         return check = false
//       }
//     }
// }else{
//     return check
// }
    
// }
// console.log(compareArray([1,2,3,5,4],[1,2,3,5,4]))

//Q5.Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.
function arrayNumber(startNum,endNum,steps){
    let arr = []
    for(let i=startNum;i<=endNum;i++){
      arr.push(i)
    }
}