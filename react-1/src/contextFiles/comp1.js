import { Comp2 } from "./comp2"
export const Comp1 = (props) =>{
    // const {count1} = props
    console.log("Comp1")
    return (<div id='comp2'>
     <Comp2 
    //  count2={count1}
       />
    </div>)
}