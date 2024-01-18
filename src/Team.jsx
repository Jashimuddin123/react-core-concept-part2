import { useState } from "react"

export default function TeamPlayers(){

    const [team ,setTeam] = useState(11);
    // ADDDING handler 
    const addingPlayerHandler = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    // removing handler 
    const removingPlayerHandler = () =>{
            const newTeam = team - 1;
            setTeam(newTeam)

        }

    


  const teamStyle = {
    border:'2px solid black',
    margin: '15px',
    padding: '10px'
  }
    return(
<div style={teamStyle}>
   <h2>Team Player :{team}</h2>
   <button style={{backgroundColor: "green", color:"white"}} 
   onClick={addingPlayerHandler}>Adding</button>
     <button style={{backgroundColor:'black', color:'white', margin:'5px'}} 
     onClick={removingPlayerHandler}>Removing</button>
</div>


    )
}