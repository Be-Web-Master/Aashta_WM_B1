//Create a paragraph of text. Add a contextmenu event listener that displays an alert saying "Right-clicked!" when the user right-clicks on the paragraph (Event: contextmenu).

const elem=document.getElementById('para')
elem.addEventListener('contextmenu',()=>{
    alert("Right-clicked!")
})