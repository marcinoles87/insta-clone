import React from 'react'
import './header.scss'

function Header({friend}) {
  return (
    <div className='header-container'>
        <div className='header-friend-logo'>
          {/* {friend.map( (friend) => {
            return(
              <>
              <div> {friend.gender}</div>
              </>
            )
          })} */}
        </div>
        <div className='header-main'>header-logo</div>
        <div className='header-link-right'>header-link-right</div>
        
    
    </div>
  )
}

export default Header