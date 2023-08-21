//Create a text input element. Add a blur event listener that alerts "Input blurred!" when the user clicks away from the input field (Event: blur).

const elem=document.getElementById('name')
elem.addEventListener('blur',()=>{
   alert("Input Blur!")
})