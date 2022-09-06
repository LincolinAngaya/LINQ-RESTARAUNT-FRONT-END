import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'


function Navbar() {
  return (
    <>
    <div><img src={logo} /></div>
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
    </>
  )
}

export default Navbar