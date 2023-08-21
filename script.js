let firstName=document.getElementById('firstName')
let lastName=document.getElementById('lastName')
let age=document.getElementById('age')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let male=document.getElementById('male')
let female=document.getElementById('female')
let errorMessage=document.getElementsByClassName('error')[0]

const validateInput =(input)=>{
    console.log(input,"1", age.value)
if(input === 'age' && age.value < 18 && age.value > 0){
errorMessage.innerText = "Age should be greater than 18"
}
else if(input === 'phone' && phone.value.length !== 10){
    errorMessage.innerText = "Phone should be 10 digit"

}
else{
   errorMessage.innerText  =""
}
}

const handleFormSubmit =(event)=>{
    event.preventDefault()
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        age:age.value,
        email:email.value,
        phone:phone.value,
        gender:male.checked ? "Male" : "Female"
    })
}