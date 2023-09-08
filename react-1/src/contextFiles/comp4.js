import { useContext } from "react"
import { CountContext } from "../UseContextDemo"
export const Comp4 = (props) =>{
    // const {count4} = props
    console.log("Comp4")
    // const countCtx = useContext(CountContext)
    // console.log({countCtx})
    const {count} = useContext(CountContext)
    return (<div id='comp5'>
      {/* {count4} */}
      {count}
   </div>)
}