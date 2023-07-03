import React from 'react'

function Coments({friend}) {
  return (
    <div className='comments-container'>
        <h1>User Name</h1>
        <p>Date</p>
        <input className='comments-input'></input>
        <button>Like</button>
    </div>
  )
}

export default Coments