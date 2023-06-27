import React, { useEffect } from 'react'

function Profil({friend , profil}) {

    console.log(friend.length)

    useEffect( () => {
         const id = Math.floor(Math.random()*friend.length);
    console.log(friend[id])

    const myProfil = friend[id]
    },[friend])

   
  return (
    <div>
        <p>user name</p>
        <p>User City</p>
        <img src={profil} alt='profil-img'></img>
        <img src='#' alt='userPhoto'></img>
    </div>
  )
}

export default Profil