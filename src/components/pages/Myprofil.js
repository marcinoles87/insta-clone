import React, { useState } from 'react'
import './myprofil.scss'

function Myprofil({friend , images}) {

  const [spinR , setSpinR] = useState(2)

  const followers = (Math.random()*10000).toPrecision(7);

  const handeChangeProfil = () => {

    setSpinR(
      Math.floor(Math.random()*friend.length)
    )

    
  }
  
  const my = friend.slice(spinR-1,spinR)



  return (
<div>
    {my.map(  (item , index) => {
      return(
      <div key={index} className='myprofil-container'>
      
      <div className='myprofil-info'>
        <img className='myprofil-photo' src={item.picture.large} alt='myprofil-face' onClick={handeChangeProfil}></img>
          <div className='myprofil-text'>
        <p className='myprofil-name'>{item.name.first} {item.name.last}</p>
        <p className='myprofil-country'>{item.location.country} / {item.location.city}</p>
        <p className='myprofil-followers'>{followers} followers</p>
        </div>

         </div>
        
        
        <div className='profil-gallery'>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
          <img src={images} alt='x'></img>
        
      </div>
    
    </div>
      )
    })}
    </div>
    
  )
}

export default Myprofil