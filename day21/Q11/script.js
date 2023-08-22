//Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

const closebox=document.getElementById('close')
const box=document.getElementById('Modal')
const elem=document.getElementsByTagName('button')[0]
elem.addEventListener('click',()=>{
    box.style.display='block'
})
closebox.addEventListener('mousedown',()=>{
    box.style.display='none'
})