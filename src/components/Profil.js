import { useState } from 'react'
import './profil.scss'
import Myprofil from './pages/Myprofil'

function Profil({friend , imagesprofil}) {

    const [randomUser , setRandomUser] = useState([])
    let selected = friend.slice(0,1)
    
    console.log(friend)

    const handleOnClick = () => {
      const index = friend.length
      console.log(index)
      const randomNumber = Math.floor(Math.random()*index)
      console.log(randomNumber)
      if(randomNumber === 0){
        setRandomUser(
          'no one friend'
        )
      }
      setRandomUser( 
        
       friend.slice(randomNumber-1,randomNumber)
      )


    }

    const handleChangePage = (e) => {
      

    }

  return (
    <div className="profil-container">
        {selected.map(  (friend , index) => {
            return(
                <div className="profil-card" key={index}>
                  <div className='profil-card-up'> 
                       

                            <div className='profil-card-name'>
                            <img className="profil-photo" src={friend.picture.thumbnail} alt='photos'></img>
                              <p className="profil-name">{friend.name.last} {friend.name.first}</p>
                              <p className="profil-info">{friend.location.country}</p>
                            </div>
                         
                        
                    <img className='profil-main-photo' src={imagesprofil} alt='pd'></img>
                    {/* <button onClick={handleOnClick}>See my Friend</button> */}
                    
                   </div>
                   
                   

                  
                    
                    {/* <div className='profil-best-friend'>

                    {randomUser.map( (item , index) => {
          return(
            < div key={index}>
              <h1>Best Friend  : </h1>
            <p>{item.name.last} {item.name.first}</p>
            <img src={item.picture.thumbnail} alt='photos'></img>
            <p><span>{item.location.country}</span></p>
            <p>{item.location.city}</p>
            </div>
          )
        })}

        </div> */}

                </div>
           )
        })}

       
      
   
    </div>
  )
}

export default Profil