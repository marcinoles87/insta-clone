import React, { useEffect } from 'react'

function Profil({friend , profil}) {

    console.log(friend.length)
         const id = Math.floor(Math.random()*friend.length);
    console.log(friend[id])

    


   
  return (
    <div>
        
        <p></p>


        <p>{friend.map(  (myPhoto , index) => {
            
            
            return(
                <div>
                <p>{friend[id].name.last}</p>
                <img src={friend[id].picture.large} alt='photo'></img>
                </div>
           )
        })}
        </p>


        <p>User City</p>
        <img src='#' alt='userPhoto'></img>
    </div>
  )
}

export default Profil