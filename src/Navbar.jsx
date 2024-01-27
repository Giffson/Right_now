import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='logo'>Fetch Bar</h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar