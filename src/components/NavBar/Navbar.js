import React from 'react'
import './Navbar.css'
import Logo from '../Homepage/images/heroimg.png'

function Navbar() {
    // const navToggle = document.querySelector(".nav-toggle");
    // const links = document.querySelector(".nav-links");
    // navToggle.addEventListener("click", function () {
    //     links.classList.toggle("show-links");
    // });

    // function toggleBar() {
    //     links.classList.toggle("show-links");
    // }

    // React.useEffect(function toggleBar () {
    //     const navToggle = document.querySelector(".nav-toggle");
    //     const links = document.querySelector(".nav-links");
    //     navToggle.addEventListener("click", function () {
    //         links.classList.toggle("show-links");
    //     })
        
    
    // })

    
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Shorly Logo" />

                <button className="nav-toggle" >
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                    <a href="">Home</a>
                    </li>
                    <li>
                    <a href="">Menu</a>
                    </li>
                    <li>
                    <a href="">About Us</a>
                    </li>
                    <li>
                    <a href="">Contact Us</a>
                    </li>
                </ul>        

                <div className="nav-buttons">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar