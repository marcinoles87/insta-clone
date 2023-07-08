import React, {  useState } from 'react'
import './comments.scss'

function Coments({friend}) {

  let [comment , setComment] = useState('');
  const [comments , setAllComents] = useState([])
  const [likes , setLikes] = useState(false)

  

 const handleOnChange = (e) =>{
  // const valueInput = e.target.value;
  setComment(
    e.target.value)
 }
    

  const handleAddComments = (e) => {

   
    e.preventDefault()
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    const fullDate = `${day}.${month}.${year}`
    console.log(fullDate)
    
    const randomIndex = Math.floor(Math.random()*friend.length)

   
    setAllComents( [...comments ,
      {
        friendId : friend[randomIndex].name.last + " "+ friend[randomIndex].name.first,
        date : fullDate,
        text : comment,
        img : friend[randomIndex].picture.thumbnail
      }
    ])

    setComment( '')

  }

  

  const handleLikes = (e) => {
    console.log(e)
    setLikes(!likes)
  }

    
    
    
  

    console.log(comments)
  
  return (
    <div className='comments-container'>
        <h1 >Comments</h1>
        <input className='comments-input' placeholder='add some comments...' onChange={handleOnChange} value={comment}></input>
        <button className='comments-button-add' onClick={handleAddComments}>Add</button>
    
       
        {comments.map( (item , index) => {
          return(
            <div key={index} className='comment'>
              <img className="profil-photo" src={item.img} alt='photos'></img>
              <h4 className='comments-user'>{item.friendId}</h4>
              <p className='comments-text'>{item.text} <i className={likes ?"fa-regular fa-hand-point-up" : "fa-regular fa-hand-point-up likes"  } onClick={handleLikes}></i> <i className="fa-regular fa-hand-point-down"></i></p>
              <p className='comments-date'>{item.date}</p>
              </div>
          )
        })}
        

        
    </div>
  )
}

export default Coments