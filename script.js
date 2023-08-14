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

// Q11. Create an object and check for isSealed after applying .seal and without 