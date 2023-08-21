//24. Truncate a given string to a specified length and add an ellipsis at the end
//  using loops.

let str="Hello! World using for str."
function truncateString(str, num){
    if(str.length <= num){
        return str
    }
    else{
        return str.slice(0,num) + '...'
    }
}
console.log(truncateString(str,-2))