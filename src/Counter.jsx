import { useState } from "react"

  export default function Counter(){
       
const [count, setCount] = useState(0);
// adding counter buttton function
  const addHander = () =>{
    const newCount = count +  1;
    setCount(newCount)
  }
//   removing counter button function
const removeHandler = () =>{
    const newCount = count - 1;
    setCount(newCount)
}


    return(
               <div style={{border :'2px solid red', margin:'20px',
                padding:'1px', borderRadius:'10px'}}>
                <h3>Counter : {count} </h3>
                <button style={{backgroundColor: "blue", margin:"5px", color:"white"}} onClick={addHander}>Add</button>
                <button style={{backgroundColor:"red"}} onClick={removeHandler}>Remove</button>
               </div>

    )
  }