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
            return(
              <div key={index}>
              <li> 
              <img className='header-friend-photo' src={friend.picture.thumbnail} alt='friend'></img>
              <p>{friend.name.first}</p>
              
              </li>
              </div>
            )
          })}
        </div>
        <div className='header-main'>
          <Main friend={friend} imagesprofil={imagesprofil}></Main>
        </div>
        <div className='header-link-right'>
          <Coments></Coments>
        </div>
        
    
    </div>
  )
}

export default Header