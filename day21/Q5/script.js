//Design a form with an input field. Implement a focus event listener that changes the input's border color to blue when it gains focus (Event: focus).

const elem=document.getElementById('name')
elem.style.borderColor="white"
elem.style.outline='none'
elem.addEventListener('focus',()=>{
   elem.style.borderColor='blue'
})