

function Profil({friend}) {


  //   console.log(friend.length)
  //        const id = Math.floor(Math.random()*friend.length);
  //   console.log(friend[id])

    
  // const idD = friend[id]

  // const myProfil = friend.filter(my => my.id.length === friend.id)
  //  console.log(myProfil)
  return (
    <div>
        
     
      {/* <p>{myProfil.name}</p> */}

        {friend.map(  (friend , index) => {
            
            
            return(
                <div key={index}>
                <p>{friend.name.last}</p>
                <img src={friend.picture.large} alt='photos'></img>
                </div>
           )
        })}
        


        <p>User City</p>
        <img src='#' alt='userPhoto'></img>
    </div>
  )
}

export default Profil