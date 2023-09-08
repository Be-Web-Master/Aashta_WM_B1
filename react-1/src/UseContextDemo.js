import {useState, createContext} from 'react';
import { Comp1 } from './contextFiles/comp1';

export const CountContext = createContext(0);
export const UseContextComp = ()=>{
   const [count, setCount] = useState(0);
   console.log({count})
    return (
    <CountContext.Provider value={{count}}>
    <div id="comp1">
        <div>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
     <Comp1 
    //  count1={count}
      />
    </div>
    </CountContext.Provider>)
}






