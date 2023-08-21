//25. Find and print the longest word in a sentence using loops.

let str = "Hello! How are you?"
function longestStr(str) {
    let strSpilt = str.split(" ")
    let longestWord = 0
    let maxStrLength=0
    for (let i = 0; i < strSpilt.length; i++) {
        if (strSpilt[i].length > longestWord) {
             maxStrLength= strSpilt[i].length
            longestWord = strSpilt[i]
        }
    }
    console.log(longestWord)
    console.log(maxStrLength)
}
longestStr(str)
