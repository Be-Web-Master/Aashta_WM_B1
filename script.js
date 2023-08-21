let firstName=document.getElementById('firstName')
let lastName=document.getElementById('lastName')
let age=document.getElementById('age')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let male=document.getElementById('male')
let errorMsg=document.getElementById('error')

const validateInput=(input)=>{
  if(input === 'age' && age.value<18){
    errorMsg.innerText='Age should be greater than 18'
  }else if(input === 'phone' && phone.value<10){
    errorMsg.innerText='phone number should be of 10 digit'
  }
  else{
    errorMsg.innerText=""
  }
}
const formSubmit=(event)=>{
   event.preventDefault()
   console.log({
    firstName:firstName.value,
    lastName:lastName.value,
    age:age.value,
    email:email.value,
    phone:phone.value,
    gender:male.checked ? "male":"female"
   })
}

