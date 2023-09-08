import {useState,useReducer} from 'react';


const reducer = (state, action)=>{
    switch(action){
        case 'plus one' :{
             return ++state
            }
        case 'add 100' :  {
             state += 100 ;
             return state
            }
        case 'multiple 10' :{  
             state *= 100
             return state
         }
        case 'divide 2' : {
            state /= 2
         return state
        }
        default :{ 
            return state
        }
    }
}
const initialState = 0
export const UseReducerComp = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [count, setCount] = useState(0);
    // const incrementByOne = (state) =>{
    //   setCount(state + 1)
    // }
    // const add100 =(state)=>{
    //     setCount(state + 100)
    // }
    // const multiple =(state)=>{
    //     setCount(state * 10)
    // }
    // const divide =(state)=>{
    //     setCount(state / 2)
    // }
    return (<>
    <button onClick={()=>{dispatch('plus one')}}>+</button>
    <button onClick={()=>{dispatch('add 100')}}>Add 100</button>
    <button onClick={()=>{dispatch('multiple 10')}}>Multiple 10</button>
    <button onClick={()=>{dispatch('divide 2')}}>divide 2</button>

    <div>
        {state}
    </div>
    </>)
}
