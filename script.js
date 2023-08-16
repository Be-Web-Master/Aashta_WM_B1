// Q1: What is the alphabet on index 6 in the given string?

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.charAt(6));

// Q2: What is the alphabet on index 3 in the given string from the end?
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.at(-4));

// Q3: What will be the character code of the word f, using string method?
const sentence = 'The quick brown fox jumps over the lazy dog.';
const ltr = sentence.indexOf('f')
console.log(ltr)
console.log(sentence.charCodeAt(ltr));

// Q4: Use the concat method to create a full name by combining the 
// first name and last name. Store the result in the variable ‘fullName’ and print it.

// const firstName = "John";
// const lastName = "Doe";
// const fullname =firstName.concat(' ',lastName);
// console.log(fullname);

// Q5: Write a JavaScript code snippet using the endsWith method to check if a given string “message” ends 
// with the word “world”. Return true if it does, otherwise return false.

// const str ='Hello world';
// console.log(str.endsWith('world'));
// console.log(str.endsWith('hello'));

// Q6: Use the String.fromCharCode() method to create a string that represents the word “HELLO” in 
// ASCII codes. Store the result in a variable called “greeting”.

// const greeting =String.fromCharCode(72, 69, 76, 76, 79);
// console.log(greeting);

// Q7: You have a string emoji containing a smiley face emoji 😀. Get the Unicode code point of the emoji 
// using the codePointAt method. What’s the code point?
 
// const str ='😊';
// console.log(str.codePointAt());

// Q8: You have a string message with the following content: “The code is not working. The code is causing errors.” 
// Replace all occurrences of the word “code” with “program” using the replaceAll method. How would you do it?

// const str ='The code is not working. The code is causing errors.';
// console.log(str.replaceAll('code','program'));

// Q9: You have a string sentence that says: “I like to eat bananas. Bananas are a healthy snack.”
//  Replace the word “bananas” with “apples” using the replace method. How would you do it?

// const str ='I like to eat bananas. Bananas are a healthy snack.';
// console.log(str.replace('bananas','apples'));

// Q10: You have a string colors containing a list of colors separated by commas: “red,green,blue,yellow” 
// Use the split method to separate these colors into an array. What will the resulting array look like?
// Expected Output: [“red”, “green”, “blue”, “yellow”]
// Expected Output: [“red”, “green”, “blue”]

// const str = 'red,green,blue,yellow';
// console.log(str.split(","));

// Q11: You have a string address that contains: “1234 Elm Street, Citysville” Using the substring method, 
// extract the portion of the address starting from index 6 until the end. What is the extracted portion?

// const str ='1234 Elm Street, Citysville';
// console.log(str.substring(6));

// Q12: You have a string sentence that reads: “JavaScript is a powerful and flexible language.” Extract the 
// substring that starts at index 11 and ends at index 26 (inclusive). What is the extracted substring?

// const str ='JavaScript is a powerful and flexible language.';
// console.log(str.substring(11,26));

// Q13: You have a string sentence that says: “I enjoy programming in JavaScript.” Use the includes method to
//  check if the sentence contains the word “JavaScript”. What will be the result?

// const str ='I enjoy programming in JavaScript.';
// console.log(str.includes('JavaScript'));

// Q14: You have a string fruits with the following content: “apple, banana, orange, mango, grape”
//  Using the includes method with an index, determine whether the word “orange” is present 
//  after the comma at index 18. What will be the result?

// const fruits ='apple, banana, orange, mango, grape';
// console.log(fruits.includes('orange',18));

// Q15: You have a string rawInput that contains extra spaces at the beginning and end: “ Hello, world! “
//  Use the trim method to remove the extra spaces from the string. What will be the resulting string?

// const str=' Hello, world! ';
// console.log(str.trim());

// Q16: You have a string word with the content: “elephant” Use the charAt method to retrieve the character 
// at the 3rd position (index 2) of the word. What character will you get?

// const str ='elephant';
// console.log(str.charAt(2));

// Q17: Using the String.fromCharCode() method, create a string that represents the characters with Unicode code 
// points 72, 101, 108, 108, and 111. What string will you get?

// console.log(String.fromCharCode(72,101,108,108,111));

// Q18: Using the String.fromCodePoint() method, create a string that represents the characters with Unicode code 
// points 128512, 128513, and 128514. What string will you get?

// console.log(String.fromCharCode(128512,128513,128514));

// Q19: You have a string sentence that says: “The sun is shining. The weather is sunny.” Use the match method with
//  a regular expression to find all occurrences of the word “sun” in the sentence. What will be the result?

// const str ='The sun is shining. The weather is sunny.';
// console.log(str.match('sun'));

// Q20: You have a string paragraph with the following content: “Apples are delicious. Bananas are tasty. Grapes are sweet.”
//  Use the matchAll method with a regular expression to find all instances of words that end with “es” in the
//   paragraph. How would you retrieve these matches?

// const str ='Apples are delicious. Bananas are tasty. Grapes are sweet.';
// console.log(...str.matchAll('es'));

// Q21: You have a string greeting that contains the text: “Hello, how are you doing?” Use the startsWith method to 
// check if the greeting starts with the word “Hello”. What will be the result?

// const str='Hello, how are you doing?';
// console.log(str.startsWith('Hello'));

// Q22: You have a string paragraph with the following content: “The quick brown fox jumps over the lazy dog.” 
// Use the search method to find the index of the word “fox” in the paragraph. What will be the result?

// const str ='The quick brown fox jumps over the lazy dog.';
// console.log(str.search('fox'));