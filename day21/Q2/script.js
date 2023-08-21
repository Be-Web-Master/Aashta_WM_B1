//Design a form with a single input field and a submit button. When the form is submitted, display an alert with the text entered in the input field (Event: submit).

// function alertMsg(){
//     alert(document.getElementById('name').value)
// }
// const elem=document.getElementById('formText')
// elem.addEventListener('submit',alertMsg)
// console.log(elem)

const elem=document.getElementById('formText')
elem.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target.name.value);
    alert(event.target.name.value)
})