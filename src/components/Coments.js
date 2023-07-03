import React, { useState } from 'react'

function Coments({friend}) {

  const [comments , setComments] = useState([])

 const handleOnChange = (e) =>{
  const valueInput = e.target.value;
  setComments(valueInput)
 }
   
  const handleAddComments = () => {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    const fullDate = `${day}.${month}.${year}`
    console.log(fullDate)
  
  }
  return (
    <div className='comments-container'>
        <h1 >Comments</h1>
        <input className='comments-input' placeholder='add some comments...' onChange={handleOnChange}></input>
        <button className='comments-button-add' onClick={handleAddComments}>Add</button>
    </div>
  )
}

export default Coments