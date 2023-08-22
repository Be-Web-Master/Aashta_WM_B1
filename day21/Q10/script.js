//Create a div of full 100vh and 100vw width and when user right click on div then changes background color to a random color on each click.

const elem=document.getElementsByTagName('div')[0]
elem.addEventListener('contextmenu',()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor= "#"+randomColor
})