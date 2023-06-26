import React from 'react'
import './main.scss'

function Main({friend}) {

  console.log(friend)

  const randomUser = Math.random()*10
  return (
    <div className='main-container'>
        {/* {friend[randomUser].picture.thumbnail} */}
    </div>
  )
}

export default Main