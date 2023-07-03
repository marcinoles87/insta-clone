import React from 'react'
import Main from './Main';
import Coments from './Coments';
import './header.scss'

function Header({friend , imagesprofil}) {
  const key = Math.random(100)*100;

  return (
    <div className='header-container'>
        <div className='header-friend-logo'>
          {friend.map( (friend , index) => {
              const fullName = `${friend.name.first}   ${friend.name.last}`;
              const name = fullName.substring(0,9) + "...";
            return(
              <div key={index}>
              <li> 
              <img className='header-friend-photo' src={friend.picture.thumbnail} alt='friend'></img>
              <p>{name}</p>
              
              </li>
              </div>
            )
          })}
        </div>
        <div className='header-main'>
          <Main friend={friend} imagesprofil={imagesprofil}></Main>
        </div>
        <div className='header-link-right'>
          <Coments friend={friend}></Coments>
        </div>
        
    
    </div>
  )
}

export default Header