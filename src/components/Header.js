import React from 'react'
import Main from './Main';
import './header.scss'

function Header({friend}) {
  const key = Math.random()*1000;
  return (
    <div className='header-container'>
        <div className='header-friend-logo'>
          {friend.map( (friend) => {
            return(
              <>
              <li key={key}> 
              <img className='header-friend-photo' src={friend.picture.thumbnail} alt='friend'></img>
              
              </li>
              </>
            )
          })}
        </div>
        <div className='header-main'>
          <Main></Main>
        </div>
        <div className='header-link-right'>header-link-right</div>
        
    
    </div>
  )
}

export default Header