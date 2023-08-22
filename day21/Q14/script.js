// Create a list of 4 items with different ID. When any of the list items are clicked, log the text content of the clicked item to the console.

const elem=document.getElementById('listitem')
elem.addEventListener('click',(event)=>{
    console.log(event)
    console.log(event.target.firstChild.data)
})