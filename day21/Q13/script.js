// Write a program that counts the number of times a user clicks anywhere on the page and displays the count in an element with the ID "clickCount".
const div=document.getElementById('clickCount')
let count=0
window.addEventListener('click',()=>{
    count += 1
    div.innerText=`${count}`
})