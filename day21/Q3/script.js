//Create an image element. When the image is fully loaded, display an alert saying "Image loaded!" (Event: load).

const elem=document.getElementById('image')
elem.addEventListener('load',(event)=>{
//    console.log(event.type.textContent="Image")
   alert(event.type.textContent="Image loaded!")
})