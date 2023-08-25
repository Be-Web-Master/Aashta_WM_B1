const elem= async (url)=>{
  const response= await fetch(url);
  const data= await response.json();
  console.log(data)
}
fetch('data.json')

// fetch('https://node-server-l898.onrender.com/')
// .then((response) => response.json())