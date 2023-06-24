import React from 'react'
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
              <img src={friend.picture.thumbnail} alt='friend'></img>
              <p>{friend.id.name}</p>
              <h2>{friend.location.country}</h2>
              </li>
              </>
            )
          })}
        </div>
        <div className='header-main'>header-logo</div>
        <div className='header-link-right'>header-link-right</div>
        
    
    </div>
  )
}

export default Header