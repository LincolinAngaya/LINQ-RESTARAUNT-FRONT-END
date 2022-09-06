import React from 'react'
import { Link } from 'react-router-dom'

import logo from './assets/logo.jpg'
import Searchbox from './Searchbox'


function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-blue border border-primary'>
    <div className='container-fluid'>

    <div className='navbar-brand'>
    <img src={logo} className='d-inline-block align-text-top' width="130" height="124" />
    </div>

    <div classname="collapse navbar-collapse" id="navbarScroll"></div>
   
      <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;'>
        <li className='nav-item'>
          <Link  className="nav-link fs-3 fw-bold" to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link  fs-3 fw-bold" to="/new-restaraunt">New Restaraunt</Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link fs-3 fw-bold" to="/login">Log In</Link>
        </li>
      </ul>   
       <Searchbox />

    </div>
    </nav>
    
  )
}

export default Navbar