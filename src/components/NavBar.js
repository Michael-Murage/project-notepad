import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <nav id='navbar'>
      <p>Notes App</p>
      <p><NavLink to='/about'>About</NavLink></p>
    </nav>
  )
}

export default NavBar