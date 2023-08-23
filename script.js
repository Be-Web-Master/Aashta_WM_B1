const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const male = document.getElementById('male')
const errorMsg = document.getElementById('error')

const validateInput = (input) => {
  if (input === 'age' && age.value < 18) {
    errorMsg.innerText = 'Age should be greater than 18'
  } else if (input === 'phone' && phone.value.length != 10) {
    errorMsg.innerText = 'phone number should be of 10 digit'
  }
  else {
    errorMsg.innerText = ""
  }
}
const handleFormSubmit = (event) => {
  event.preventDefault()
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    email: email.value,
    phone: phone.value,
    gender: male.checked ? "male" : "female"
  })
}

