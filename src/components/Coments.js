import React, { useState } from 'react'

function Coments({friend}) {

  const [comments , setComments] = useState([])

 const handleOnChange = (e) =>{
  const valueInput = e.target.value
  console.log(valueInput)
 }
   
  const handleAddComments = (e) => {

    setComments()
    console.log(comments)
    console.log(e.target.value)

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