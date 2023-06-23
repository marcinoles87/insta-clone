import React from 'react'

import logo from '../img/Instagram.png';
import search from '../img/search.jpg'

function Navigation() {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
            <img className='logo' src={logo} alt='instagram logo'></img>
        </div>
        <div className='search'>
            <img className='search' src={search} alt='search icon'></img>
            <span>Search</span>
            <input placeholder='search'></input>
        </div>

    </nav>
  )
}

export default Navigation