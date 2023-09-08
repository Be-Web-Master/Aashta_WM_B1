//           accross  Re-render
//          re-render
//           persist  Trigger  UI update
// State ->    yes      yes       yes
// ref ->      yes      no        yes
// local ->    no       no        no




import {useState, useRef, useEffect} from 'react';
export const UseRefComp=()=>{
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [toggle,setToggle] = useState(false);
    
    useEffect(()=>{
        if(countRef.current){
            countRef.current.innerText = 0
        }
    },[])
    
    console.log(count, countRef.current.innerText)
    return <div>
        <button onClick={()=>{
            setToggle(!toggle)
            // setCount(count+ 1)
        countRef.current.innerText=Number(countRef.current.innerText )+ 1;
        }}>+</button>
        <div ref={countRef}>
        {countRef.current.innerText}
        </div>
        
    </div>
    
}