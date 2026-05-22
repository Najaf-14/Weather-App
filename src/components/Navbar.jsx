import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2>Weather App</h2>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/forecast">Forecast</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
    </nav>
  )
}

export default Navbar