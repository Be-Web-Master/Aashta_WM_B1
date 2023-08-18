// 21. Using loop, Create a function that takes a string as input and returns
//  the reverse of that string.

let str = "Hello! World"
function reverse(str){
   let str1 = ""
   for(let i=str.length-1;i>=0;i--){
    str1 += str[i]
   }
   console.log(str1)
}
reverse(str)