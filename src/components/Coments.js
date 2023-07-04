import React, { useState } from 'react'

function Coments({friend}) {

  let [comment , setComment] = useState('');
  const [date , setDate] = useState();
  const [comments , setAllComents] = useState([])

  

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
    setDate(fullDate)
    

    setAllComents( [...comments ,
      {
        date : fullDate,
        text : comment,
      }
    ])
    
    
  

    console.log(comments)
  }
  return (
    <div className='comments-container'>
        <h1 >Comments</h1>
        <input className='comments-input' placeholder='add some comments...' onChange={handleOnChange}></input>
        <button className='comments-button-add' onClick={handleAddComments}>Add</button>
    
       
        {comments.map( (item , index) => {
          return(
            <div key={index}>
              <p>{item.text}</p>
              <p>{item.date}</p>
              </div>
          )
        })}
        

        
    </div>
  )
}

export default Coments