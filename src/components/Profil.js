import { useState } from 'react'
import './profil.scss'

function Profil({friend , imagesprofil}) {

    const [randomUser , setRandomUser] = useState()
    let selected = friend.slice(0,1)
    

    const handleOnClick = () => {
const index = friend.length
      console.log(index)
      const randomNumber = Math.floor(Math.random()*index)
      console.log(randomNumber)
      
      setRandomUser( 
       friend.slice(randomNumber-1,randomNumber)
      )
    }

    console.log(randomUser)

  return (
    <div className="profil-container">
        {selected.map(  (friend , index) => {
            return(
                <div className="profil-card" key={index}>
                  <div className='profil-card-up'> 
                        <img className="profil-photo" src={friend.picture.thumbnail} alt='photos'></img>
                            <div className='profil-card-name'>
                              <p className="profil-name">{friend.name.last} {friend.name.first}</p>
                              <p className="profil-info">{friend.location.country}</p>
                        </div>
                        
                    </div>
                   
                    <img className='profil-main-photo' src={imagesprofil} alt='pd'></img>
                    <i className="fa-solid fa-chevron-right fa-lg" onClick={handleOnClick}></i>
                    

                </div>
           )
        })}

        {randomUser.map( (my) => {
          return(
            <div>
              <p>{my.name.last}</p>
              
            </div>
          )
        })}
        
    </div>
  )
}

export default Profil