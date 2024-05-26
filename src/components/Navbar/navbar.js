import React from 'react'
import './navbar.css'


const navbar = () => {
  return (
    <div className='navbar'>

        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'> Connect with me</div>
    </div>

  )
}

export default navbar
