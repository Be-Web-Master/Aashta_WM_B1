//Create a div element with some text inside. Implement a mousedown event listener that changes the text to "Clicked!" when the user clicks on the div (Event: mousedown).

const elem=document.getElementsByTagName('div')[0]
elem.addEventListener('mousedown',()=>{
    elem.innerText='Clicked!'
})