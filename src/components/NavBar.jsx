import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar' style={{position: 'relative'}}>
      <p>Notes App</p>
      <div id='links-container container-fluid'>
        <NavLink id='home-link' to='/'>Home</NavLink>
        <NavLink id='about-link' to='/about'>About</NavLink>
        <NavLink id='links' to='/links'>Links</NavLink>
      </div>
    </nav>
  )
}

export default NavBar