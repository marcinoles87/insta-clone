import React from 'react'
import './myprofil.scss'

function Myprofil({friend}) {

  const followers = (Math.random()*10000).toPrecision(7);
  
  const my = friend.slice(0,1)

  return (
<div>
    {my.map(  (item , index) => {
      return(
      <div key={index} className='myprofil-container'>
      <img className='myprofil-photo' src={item.picture.large} alt='myprofil-face'></img>
      <div className='myprofil-info'>
        <p className='myprofil-name'>{item.name.first} {item.name.last}</p>
        <p className='myprofil-country'>{item.location.country}</p>
        <p className='myprofi-fallowers'>{followers} followers</p>
        
        <p> info</p>
        <div className='profil-gallery'>

        </div>
      </div>
    
    </div>
      )
    })}
    </div>
    
  )
}

export default Myprofil