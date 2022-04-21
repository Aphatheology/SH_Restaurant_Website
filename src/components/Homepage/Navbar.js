import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/heroimg.png'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="Shorly Logo" />

        </div>

        <div className="nav-links">
            <ul>
               <Link to='/'> 
                    <li>Home</li> 
                </Link>
                
                <Link to='/menu'>
                    <li>Menu</li>
                </Link>

                <Link to="/about">
                    <li>
                        About Us
                    </li>
                </Link>

                <Link to="/contact">
                    <li>
                        Contact Us
                    </li>
                </Link>
                
                
            </ul> 
        </div>
    </nav>
  )
}

export default Navbar