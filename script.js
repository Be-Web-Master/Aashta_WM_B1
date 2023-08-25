const idInput = document.getElementById('idInput')
const submitBtn=document.getElementById('submitBtn')
const todoList=document.getElementById('todoList')
const GET_URL= (idInpVal) =>`https://jsonplaceholder.typicode.com/todos/${idInpVal}`;
const liArrayData=[]

const fetchData = async (api)=>{
    const todoDataResponse = await fetch(api);
    const todoData = await todoDataResponse.json();
    return todoData;
}

const changeBtnText =(text)=>{
    submitBtn.innerText=text;
}

const addElement= (liText) =>{
    const liTagElem=document.createElement('li')
    liTagElem.innerText =liArrayData[i]
    todoList.append(liTagElem)
}

const handleAddTaskSubmit = async (event)=>{
  event.preventDefault();
  let idInputVal = idInput.value;
  if(idInputVal === "" || idInputVal <=0 || idInputVal >200){
    alert("Enter valid input id")
    idInput.value=""
    return;
  }

  changeBtnText("Adding")

  const todoData =await fetchData(GET_URL(idInputVal))
  console.log(todoData)
  if(!todoData.title){
    alert('Failed to get Data!');
    idInputVal="";
    changeBtnText('Add')
    return;
  }
  liArrayData.push(todoData.title)
  changeBtnText("Add")
}