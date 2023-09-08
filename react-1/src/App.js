import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {InputForm} from "./InputForm";
import { DataList, dataArray } from './DataList';
import { UseEffectComp } from './useEffect';
import { UseRefComp } from './useRefDemo';
import { UseContextComp } from './UseContextDemo';
import { UseReducerComp } from './useReducer';


const ReactComp =()=> {
  //  const [count, setCount] = useState(0)
  //  function increment(){
  //   setCount(count + 1)
  //  }
  return (
    <>
    <UseReducerComp  />
    {/* <UseContextComp /> */}
    {/* <UseRefComp /> */}
    {/* <UseEffectComp /> */}
    </>
  )
  // <div>
  // <button id="addbtn" onClick={increment}>Add</button>
  // <span>Count:{count}</span>
  // <button id="subbtn" onClick={()=>setCount(count - 1)}>Subtract</button>
  // <InputForm rcCount={count}>
  //  {count>5 ? (<Comp1 compCount={count * 3000}/>)
  //  :(<Comp1 compCount={count * 1000}/>)} 
    
  //    {count > 5 && <div>Hello from div</div>}
  // </InputForm>
  // {dataArray.map((obj, idx)=>{
  //   const {a, b}=obj
  //   return <DataList order={idx + 1} a={a} b={b}/>
  // })}
 
  // </div> ;
}
export default ReactComp;

// const Comp1 = (props) =>{
//   const {compCount} = props
//   return <div>From Comp1:{compCount}</div>
// }

