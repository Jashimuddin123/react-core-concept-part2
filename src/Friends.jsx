import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Friend.css'


export default function Friends(){

// set usestate
const [friends, setFriends] = useState([]);

// LOAD featch api using useEffect
   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setFriends(data))
   }, [])

    return (
        <div className='box'>
            <h2>Friend Users :{friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    
            
        
    )
}