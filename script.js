// const todoFetch=async(url)=>{
//   const response= await fetch(url);
//   const data = await response.json()
//   console.log(data)
// }

const elem=document.getElementById('Button')
elem.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>response.json()).then((data) => console.log(data)).catch((error) => console.log(error))
})