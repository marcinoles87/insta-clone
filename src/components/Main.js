import React from 'react'
import './main.scss'
import profil from '../img/profil.jpg'

function Main({friend}) {

  return (
    <div className='main-container'>
       <img src={profil} alt='profil-img'></img>
    </div>
  )
}

export default Main