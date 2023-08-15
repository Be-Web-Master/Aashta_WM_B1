// const studentObj ={
//     name:"Aastha",
//     rollNumber: 1,
//     class:9,
//     section:'A',
//     gender:'Female',
//     country:'India'
// }

//List all the keys of the given object.
// console.log(Object.keys(studentObj));

//List all the value of the given object.
// console.log(Object.values(studentObj));

//List all the keys and values of the given object in the form of array.
// console.log(Object.entries(studentObj));

//Merge all of these object and create a single object using object method.
// const obj1 ={ name:"Deepak", gender:'female'};
// const obj2 ={ section:'B', gender:'Male'}
// const obj3 ={ country:'India'}
// console.log(Object.assign(obj1,obj2,obj3));

// Q. Create an Object which have properties name and one method
//  printStudentDetail,create another object using .create method, 
//  add some more properties and print student details.
// const student={
//     name:"Aastha",
//     lastname:"Shrivastava",
//     printStudentDetails: function(){
//    console.log(`My name is ${this.name}`+`${this.lastname} rollno. is ${this.rollno} My country is ${this.country}`)
//     }
// }
// const studDetail =Object.create(student);
// studDetail.rollno=20;
// studDetail.country="India";
// console.log(studDetail.printStudentDetails());

// Q. Create an object with 2 properties and add 1 properties using .defineProperty()
//   with writable true.
// const obj ={
//     name:"Aastha",
//     rollno:20
// }
// Object.defineProperty(obj,'age',{
//     value:22,
//     writable:true
// });
// console.log(obj);

// Q7. Create an object with 2 properties and add 2 properties using .defineProperties(), one should be writable true.

// const object={
//     name:"Aastha",
//     lastname:"Shrivastava"
// }
// Object.defineProperties(object,{
//     age:{
//         value:20,
//         writable:true
//     },
//     rollno:{
//         value:2,
//         writable:true
//     }
// })
// console.log(object);

// Q8. Create an object and apply .preventExtensions and try to add properties using defineProperties and then remove any existing properties.
//=>add ni kr skte ho delete kr skte ho
// const object ={
//     name:"Aastha",
//     age:22
// }
// Object.preventExtensions(object);
// delete object.name;
// console.log(object);

// Q9. Create an object and apply .seal and try to add properties using defineProperties and then remove any existing properties.
//=>update hoga delete ni hoga
// const object={
//     name:"Aastha",
//     age:22
// }
// Object.seal(object);
// Object.defineProperties(object,{
//         age:{
//             value:20,
//             writable:true
//         },
//         rollno:{
//             value:2,
//             writable:true
//         }
//     });
//  console.log(object);

// Q10.Create an object and apply .freeze and try to add properties using defineProperties and then remove any existing properties.
//=> isme kuch bhi ni hoga 
// const object={
//         name:"Aastha",
//         age:22
//     }
// Object.freeze(object);
//  Object.defineProperties(object,{
//    age:{
//     value:20,
//     writable:true
//        },
//     rollno:{
//         value:2,
//          writable:true
//             }
//   });
// console.log(object);

// Q11. Create an object and check for isSealed after applying 
// .seal and without applying .seal
// const obj = {
//     name:"Aastha",
//     city:"Bhopal"
// }
// console.log(Object.isSealed(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));

// Q12: Create an object and check for isExtensible
//  after applying .preventExtensions and without applying .preventExtensions

// const obj = {
//         name:"Aastha",
//         city:"Bhopal"
//     }
// console.log(Object.isExtensible(obj));
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

// Q13: Create an object and check for isFrozen after applying
//    .freeze and without applying .freeze
 
// const obj = {
//             name:"Aastha",
//             city:"Bhopal"
//         }
//     console.log(Object.isFrozen(obj));
//     Object.freeze(obj);
//     console.log(Object.isFrozen(obj));

// Q14: Create an object and gets it’s prototype

// const obj ={
//     name:"Aastha",
//     city:"Bhopal"
// }
// console.log(Object.getPrototypeOf(obj));

// Q15: Create two objects obj1, obj2 and set obj1’s 
// prototype on the obj2 object and try to get obj1 properties 
// through obj2, which should not exist in obj2 before.

// const obj1={
//     name:"Aastha",
//     city:"Bhopal"
// }
// const obj2={
//     age:22,
//     rollno:10
// }
// Object.setPrototypeOf(obj1,obj2);
// console.log(obj1.age);

// Q16: Create an object and apply .entries then 
// create a new object using .fromEntries() and assign it in myObj2.

// const obj1={
//         name:"Aastha",
//         city:"Bhopal"
//     }
//  console.log(Object.entries(obj1));

//  const obj1=new Map([
//     ['name','Aastha'],
//     ['rollno','15']
//  ])
//  const obj2 = Object.fromEntries(obj1);
//  console.log(obj2);

// Q17: Create an object and try to check two properties
//  using .hasOwnProperty, second property should not exist.

// const obj={
//             name:"Aastha",
//             city:"Bhopal"
//         }
//  console.log(Object.hasOwn(obj,'name'));   
//  console.log(Object.hasOwn(obj,'age'));      
