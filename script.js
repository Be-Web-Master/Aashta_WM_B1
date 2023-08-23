const getInputId = document.getElementById('todoinput')
const submitForm=document.getElementById('submitForm')
const showData=document.getElementById('showData')

submitForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(getInputId.value>=1 && getInputId.value<=200){
    fetch(`https://jsonplaceholder.typicode.com/todos/${getInputId.value}`)
    .then((response)=>response.json())
    .then((data) => {const newData=`<p><strong>${data.id}:</strong> ${data.title}</p>`
    showData.innerHTML = newData})
    .catch((error) => console.log(error))
    
    }
    else{
        alert("Enter number between 1 to 200")
    }
})
