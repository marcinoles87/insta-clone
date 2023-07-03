import React, { useState } from 'react'

function Coments({friend}) {

  const [comments , setComments] = useState();
  const [date , setDate] = useState();

  const ar = []

 const handleOnChange = (e) =>{
  const valueInput = e.target.value;
  setComments(valueInput)
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
    ar.push(comments)
  
    console.log(ar)
  }
  return (
    <div className='comments-container'>
        <h1 >Comments</h1>
        <input className='comments-input' placeholder='add some comments...' onChange={handleOnChange}></input>
        <button className='comments-button-add' onClick={handleAddComments}>Add</button>
        <p>{date}</p>
        <p>{comments}</p>
        <p>{ar}</p>
        

        
    </div>
  )
}

export default Coments