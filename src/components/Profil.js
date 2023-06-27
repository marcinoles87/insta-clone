import React from 'react'

function Profil({friend , profil}) {
  return (
    <div>
        <p>Name user</p>
        <p>User City</p>
        <img src={profil} alt='profil-img'></img>
        <img src='#' alt='userPhoto'></img>
    </div>
  )
}

export default Profil