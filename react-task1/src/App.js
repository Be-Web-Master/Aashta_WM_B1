import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [inputVal, setInput] = useState('')
  const [data, setData] = useState([])
  const [isChecked, setisChecked] = useState(false)

function deleteInput(elem){

  // console.log({elem});
  const {[data.indexOf(elem)]: removed, ...rest} = data
  console.log({rest})
   setData(Object.values(rest))
}

  return(
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" value={inputVal} onChange={(e) => {setInput(e.target.value)}}  />
      <button type="submit" onClick={() => {
        const newData = [inputVal, ...data]
        setData(newData)
        setInput('')
      }}>Submit</button>
      </form>
      <input type="checkbox" id="checkbox" checked={isChecked} onChange={()=>{setisChecked(!isChecked)}}/>
      <label htmlFor="checkbox">List</label>
      <hr />
      {isChecked ?(
         <ol>
         {data.map((obj)=>{
         return <li>
           {obj}<span onClick={()=>deleteInput(obj)}> ❌</span>
         </li>}
        )}</ol>
      ) :( 
        <div className='wrapcard'>
      {data.map((obj, i)=>{
      return <div className='card' key={i}>
        {obj}<span onClick={()=>deleteInput(obj)}> ❌</span>
      </div>}
     )}</div>)}
    
      
     
    </div>
  );
}

export default App;
