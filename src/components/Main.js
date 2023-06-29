import React from 'react'
import './main.scss'
import profil from '../img/profil.jpg';
import Profil from './Profil';

function Main({friend , imagesprofil}) {


  return (
    <div className='main-container'>
       <Profil friend={friend.filter( (item , index) => item.gender !== 'female')} profil={profil} imagesprofil={imagesprofil}></Profil>
    </div>
  )
}

export default Main