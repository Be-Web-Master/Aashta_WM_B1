// 23. Convert a given string to uppercase using a loop.

let str="Hello! World"
let upperCaseStr=""
function ConvertToUpperCase(str){
    for (const char of str) {
        let value= char.charCodeAt()

    if(value>=97 && value<=122){
        upperCaseStr = upperCaseStr + String.fromCharCode(value-32)
    }
    else{
        upperCaseStr = upperCaseStr+char
    }
}
console.log(upperCaseStr)
}
ConvertToUpperCase(str)
