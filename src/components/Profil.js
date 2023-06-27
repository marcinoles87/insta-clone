import React, { useEffect } from 'react'

function Profil({friend , profil}) {

    console.log(friend.length)
         const id = Math.floor(Math.random()*friend.length);
    console.log(friend[id])

    const myProfil = friend[id]


   
  return (
    <div>
        
        <p>{friend.map(  (myPhoto , index) => {
            
            return(
                <p>{friend[id].name.last}</p>
            )
        })}</p>
        <p>User City</p>
        <img src={profil} alt='profil-img'></img>
        <img src='#' alt='userPhoto'></img>
    </div>
  )
}

export default Profil