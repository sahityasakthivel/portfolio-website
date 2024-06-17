import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>

        <ul className='nav-menu'>
            <li>
              <NavLink to ="/">Home</NavLink>
            </li>
            <li>
              <NavLink to ="/experience">Experiences</NavLink>
            </li>
            <li>
              <NavLink to ="/project">Projects</NavLink>
            </li>
            <li>
              <NavLink to ="/education">Education</NavLink>
            </li>
        </ul>
    </div>

  )
}

export default Navbar
