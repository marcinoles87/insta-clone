import './profil.scss'

function Profil({friend}) {


    console.log(friend)

    const selected = friend.slice(0,1)
    console.log(selected)

  return (
    <div className="profil-container">
        {selected.map(  (friend , index) => {
            return(
                <div className="profil-card" key={index}>
                    <p className="profil-name">{friend.name.last} {friend.name.first}</p>
                    <p className="profil-info">{friend.location.country}</p>
                    <img className="profil-photo" src={friend.picture.large} alt='photos'></img>
                </div>
           )
        })}
        
    </div>
  )
}

export default Profil