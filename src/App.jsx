import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import TeamPlayers from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  // normal funtion handler
  function handaleClick() {
     alert('learn react handlerclick')
  }
  
  // arrow funtion handler
   const handleClick2 = ()=>{
     alert('this is arrow function handler btn')
   }

  // add to five in set paramiter
   const addToFive = (num) =>{
    alert(num +  5)
   }
     const btnStyle = { backgroundColor: 'purple', margin:'10px', color:'white'}
  return (
    <>
      <h2>Rect Core Concepts 2 </h2>
      <Friends></Friends>
      <User></User>
      <TeamPlayers></TeamPlayers>
      <Counter></Counter>
      <button style={btnStyle} onClick={handaleClick}>Click Me</button>
    
      <button style={btnStyle} onClick={handleClick2}>Click2</button>
      <button style={btnStyle} onClick={ () =>{alert('this is anonymus functin button')}}>third</button>
      {/* set paratmiter adding button */}
      <button style={btnStyle} onClick={() => addToFive(4)}>four</button>
    </>
  )
}

export default App
