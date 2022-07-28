import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <nav id='navbar'>
      <p>Notes App</p>
      <div id='links-container'>
        <NavLink id='home-link' to='/'>Home</NavLink>
        <NavLink id='about-link' to='/about'>About</NavLink>
        <NavLink id='links' to='/links'>Links</NavLink>
      </div>
    </nav>
  )
}

export default NavBar