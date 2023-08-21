//Design an input field. Implement a keyup event listener that displays an alert with the current value of the input field whenever a key is released (Event: keyup).

const elem=document.getElementById('name')
elem.addEventListener('keyup',()=>{
    alert(elem.value)
})