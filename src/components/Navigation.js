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
        
            <img className='search-icon' src={search} alt='search icon'></img>
            <span>Search</span>
            <input placeholder='search...'></input>
    

    </nav>
  )
}

export default Navigation