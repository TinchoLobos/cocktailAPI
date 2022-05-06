import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return(
  <nav className='navbar'>
    <div className='nav-center'>
      <Link to='/cocktailAPI'>
        <img src={logo} alt="cocktail db logo" className='logo'/>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/cocktailAPI'>Home</Link>
        </li>
          <li>
          <Link to='about'>About</Link>
        </li>
    
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
