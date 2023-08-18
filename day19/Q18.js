// 18. Count the number of vowels and consonants in a given string.

let str = "Hello! World"
let vowel=0, consonants=0
str = str.replace(" ","")
for(let i=0;i<str.length;i++){
    let str1 = str[i].toLowerCase()
    // console.log(str1)
    if(str1=='a' || str1=='e' || str1=='i' || str1=='o' || str1=='u'){
         vowel++
    }
    else{
        consonants++
    }
}
console.log(vowel)
console.log(consonants)