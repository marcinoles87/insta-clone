import React from 'react'
import  './navigation.scss'

import logo from '../img/Instagram.png';
import search from '../img/search.jpg'

function Navigation({friend}) {

  const handleOnChange = (e) =>{
    e.preventDefault();

    
  
    console.log(friend[0].name.first)

    const inputValue = e.target.value;

    const findFriend = friend.filter( friend => friend.name.first.includes(inputValue))
    console.log(findFriend)
    

    
  }

  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
            <img className='logo' src={logo} alt='instagram logo'></img>
        </div>
        
        <div className='nav-search'>
            <img className='search-icon' src={search} alt='search icon'></img>
            <span>Search</span>
            <input placeholder='search...' onChange={handleOnChange} ></input>
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-envelope"></i>
        </div>

    </nav>
  )
}

export default Navigation