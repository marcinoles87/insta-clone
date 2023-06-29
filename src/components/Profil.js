import './profil.scss'

function Profil({friend , imagesprofil}) {


    console.log(friend)

    const selected = friend.slice(0,1)
    console.log(selected)

  return (
    <div className="profil-container">
        {selected.map(  (friend , index) => {
            return(
                <div className="profil-card" key={index}>
                    <img className="profil-photo" src={friend.picture.thumbnail} alt='photos'></img>
                    <p className="profil-name">{friend.name.last} {friend.name.first}</p>
                    <p className="profil-info">{friend.location.country}</p>
                    <img className='profil-main-photo' src={imagesprofil} alt='pd'></img>
                    

                </div>
           )
        })}
        
    </div>
  )
}

export default Profil