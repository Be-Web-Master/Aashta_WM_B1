//Open sidebar on click a "Open Modal" and then change button text to "Close Modal", When user clicks on "Close Modal" the hide modal and change text to "Open Modal". 

const btn=document.getElementById('Button')
const modal=document.getElementById('Modal')
let val=0
btn.addEventListener('click',()=>{
    if(val === 0){
        modal.style.display='block'
        btn.innerText="Close Modal"
        val=1
    }
    else{
        modal.style.display='none'
        btn.innerText="Open Modal"
        val=0
    }
})