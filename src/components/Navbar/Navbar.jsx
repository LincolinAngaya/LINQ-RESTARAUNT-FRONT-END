import React from 'react'
import { Link } from 'react-router-dom'
// import './App.scss'
import '../Navbar/Navbar.scss'

import logo from '../../assets/logo.jpg'


function Navbar() {
  return (
   
     <nav className='navbar'>
    

   
    <img src={logo} alt="linq logo" width="130" height="124" />
  
   
      <ul className='nav-links'>
        <li>
          <Link  className="nav-link" to="/">Home</Link>
        </li>
        <li >
          <Link className="nav-link" to="/new-restaraunt">New Restaraunt</Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">Log In</Link>
        </li>
      </ul>   
   
    </nav> 
    
  )
}

export default Navbar