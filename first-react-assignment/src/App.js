import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')
  const [note, setNote] = useState([])
  const [modal, setModal] = useState(false)


  function deleteNote(i){
    setNote((note)=>{
      return note.filter((elem,id)=>{
        return id !== i
      })
    })
  }
  
  function handleButtonSubmit(){
    const newNote = {title, discription}
        setNote([...note, newNote])
        setTitle('')
        setDiscription('')
        // console.log(newNote)
  }

  function editNote(idx){
    setTitle(note[idx].title)
    setDiscription(note[idx].discription)
    setModal(true)
    setTitle('')
    setDiscription('')
  }

  return (
    <>
   <div>
   <h1>Create Note</h1>
   <form onSubmit={(event)=>event.preventDefault()}>
      <input type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} />

      <textarea rows="5" cols="50" value={discription} placeholder="description" onChange={(e)=>{setDiscription(e.target.value)}}></textarea>
      <button type="submit" onClick={()=>{handleButtonSubmit()}}>Submit</button>
    </form>
   </div>
    <hr />
    <div className='Note'>
    {note.map((noteElem, i)=>{
      return <div className='card' key={i}>
         <div className='icon'><span onClick={()=>editNote(i)}>✏️</span><span onClick={()=>deleteNote(i)}>❌</span></div>
        <strong>{noteElem.title}:</strong>{noteElem.discription}
      </div>}
     )}
    </div>

   <div>
   {modal && 
    <form onSubmit={(event)=>event.preventDefault()}>
      <h5>Edit Form</h5>
    <input type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} />

    <textarea rows="5" cols="40" value={discription} placeholder="description" onChange={(e)=>{setDiscription(e.target.value)}}></textarea>
    <button type="submit" onClick={()=>{handleButtonSubmit()}}>Edit Submit</button>
  </form>
  }
   </div>
    
    </>
  );
}

export default App;
