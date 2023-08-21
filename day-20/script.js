//Q1.Create an empty Map called myMap.
 const myMap= new Map()

//Q2.Add the following key-value pairs to myMap: "name" - "John", "age" - 25, "city" - "New York".
myMap.set('name','John')
myMap.set('age','25')
myMap.set('city','New York')
console.log(myMap)

//Q3.Check if myMap has a key "age". Return true if it exists, otherwise return false.
if(myMap.has('age')){
  console.log("true")
}
else{
   console.log("false")
}

//Q4.Get the value associated with the key "city" from myMap.
console.log(myMap.get('city'))

//Q5.Loop through all the key-value pairs in myMap and log them to the console.
for (const key of myMap) {
    console.log(key)
}

//Q6.Remove the key "name" from myMap
// console.log(myMap.delete('name'))
// console.log(myMap)

//Q7.Get the number of key-value pairs in myMap.
console.log(myMap.keys())

//Q8.Create a new Map called secondMap and add the same key-value pairs as myMap to it.