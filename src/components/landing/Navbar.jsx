import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.jpg'


function Navbar() {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
    <div className='navbar-brand'>
    <img src={logo} className='d-inline-block align-text-top' width="30" height="24" />
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-restaraunt">New Restaraunt</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>

    </nav>
    </div>
    </div>
  )
}

export default Navbar