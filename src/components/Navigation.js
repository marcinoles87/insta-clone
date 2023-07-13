import React from 'react'
import  './navigation.scss'

import logo from '../img/Instagram.png';
import search from '../img/search.jpg'

function Navigation({friend , setFriend , setSearch}) {

  const handleOnChange = (e) =>{
    
    e.preventDefault();

    const inputValue = e.target.value;
    const newFriend = [...friend ]
    const findFriend = newFriend.filter( friend => friend.name.first.toUpperCase().includes(inputValue))
   

    
        setSearch(inputValue)
  
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