//Create a text input element. Implement a keydown event listener that alerts "Key pressed!" when any key is pressed in the input field (Event: keydown).

const elem=document.getElementById('name')
elem.addEventListener('keydown',()=>{
    alert("Key pressed!")
})