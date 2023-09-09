import { counterActions } from "./slice"
import {useSelector, useDispatch} from 'react-redux'

export const ReduxDemo=()=>{
    const count = useSelector(state=>{
        console.log(state)
        return state.counter.count
    })
    const dispatch =useDispatch()     
    const {incBy1}= counterActions
    return<>
    <button onClick={()=>{dispatch(incBy1())}}>redux</button>
    <div>{count}</div>
    </>
}