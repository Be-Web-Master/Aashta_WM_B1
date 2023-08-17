// Given an object person with properties name, age, and city, use a for...in loop to display all key-value pairs.

const person ={
    name:"Aastha",
    age:22,
    city:"Bhopal"
}
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}