import React from 'react'

function Myprofil({friend}) {
  
  const my = friend.slice(0,1)

  return (
<div>
    {my.map(  (item , index) => {
      return(
      <div key={index} className='myprofil-container'>
      <img className='myprofil-photo' src="#" alt='myprofil-face'></img>
      <div className='myprofil-name'>
        <p>{item.name.first}</p>
        <p>{item.name.last}</p>
        
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