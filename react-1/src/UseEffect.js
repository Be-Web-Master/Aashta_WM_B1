import { useEffect, useState } from "react"

export const UseEffectComp = () =>{
    const [count, setCount] = useState({
        countX:0,
        countY:0,
        changes:[]
    });
    // const [countX, setCountX] = useState(0);

    useEffect(()=>{
        console.log("called from effect")
    },[count])
    console.log({count})
   return <div onClick={()=>{ setCount(count + 1)}}>
    {count}
    {/* <button onClick={(e)=>{
        e.stopPropagation();
        setCountX(countX + 10)
    }}>X {countX}</button> */}
   </div>
}