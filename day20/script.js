//Q1.Create an empty Set called mySet.
const mySet = new Set()

//Q2.Add the following values to mySet: 1, 2, 3, 4, 5.
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

//Q3.Check if mySet contains the value 3. Return true if it exists, otherwise return false.
// console.log(mySet.has(7))

//Q4.Loop through all the values in mySet and log them to the console.
// for (const value of mySet) {
//     console.log(value)
// }

//Q5.Remove the value 4 from mySet.
// mySet.delete(4)
// console.log(mySet)

//Q6.Create another Set called secondSet and add the values 3, 4, 5, 6, 7 to it.
const secondSet=new Set()
secondSet.add(3).add(4).add(5).add(4).add(7)
// console.log(secondSet)

//Q7.Find the intersection of mySet and secondSet, and store the result in a new Set called intersectionSet.
function intersection(mySet,secondSet){
    let intersectionSet=new Set();
    for (const value of secondSet) {
        if(mySet.has(value)){
            intersectionSet.add(value)
        }
    }
    return intersectionSet
}
// console.log(intersection(mySet,secondSet))

//Q8.Find the union of mySet and secondSet, and store the result in a new Set called unionSet.
function union(mySet,secondSet){
    let unionSet=new Set();
    for (const value of mySet) {
            unionSet.add(value)
    }
    return unionSet
}
console.log(union(mySet,secondSet))

//Q9.Clear all the values from mySet.
mySet.clear()
console.log(mySet)

//Q10.Check if mySet is empty. Return true if it is empty, otherwise return false.
if(mySet.size){
console.log(true)
}else{
    console.log(false)
}