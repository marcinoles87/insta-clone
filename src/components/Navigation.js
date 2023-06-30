import React from 'react'
import  './navigation.scss'

import logo from '../img/Instagram.png';
import search from '../img/search.jpg'

function Navigation() {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
            <img className='logo' src={logo} alt='instagram logo'></img>
        </div>
        
        <div className='nav-search'>
            <img className='search-icon' src={search} alt='search icon'></img>
            <span>Search</span>
            <input placeholder='search...'></input>
            <i class="fa-solid fa-house"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-envelope"></i>
        </div>

    </nav>
  )
}

export default Navigation