import React from 'react'
import { Link } from 'react-router-dom'
// import './App.scss'
import '../Navbar/Navbar.scss'

import logo from '../../assets/logo.png'


function Navbar() {
  return (
   
     <nav className='navbar'>
    

   
    <img src={logo} alt="linq logo" width="130" height="130" />
  
   
      <ul className='nav-links'>
        <li>
          <Link  className="nav-link" to="/">Home</Link>
        </li>
        <li >
          <Link className="nav-link" to="/login">New Restaraunt</Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">Sign In</Link>/
          <Link className="nav-link" to="/sign-up">Sign up</Link>
        </li>
      </ul>   
   
    </nav> 
    
  )
}

export default Navbar