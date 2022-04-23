import React from 'react';
import './Footer.css';
import Subscribe from './Subscribe';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/insta.png';

const Footer = () => {
  return (
    <div className="footer" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL+"/bgfooter.png"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className="subscribe">
        <Subscribe />
      </div>
      <div className="footer-text">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Akobo Ojurin , Ibadan, Nigeria</p>
          <p>+234 814 1758 811 <br /> +234 813 1172 378</p>
        </div>
        <div className="c-details">
          <h1>SH-RESTAURANT</h1>
          <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <p className="social-icons">
            <a href="https://www.facebook.com/SideHustleNigeria/" target="__blank"><img src={ facebook } alt="Facebook"/></a>
            <a href="https://twitter.com/ngsidehustle?s=11" target="__blank"><img src={ twitter } alt="Twitter"/></a>
            <a href="https://instagram.com/sidehustleinternship?igshid=1sb7ei0owciam" target="__blank"><img src={ instagram } alt="Instagram"/></a>
          </p>
        </div>
        <div className="work-hours">
          <h3>Working Hours</h3>
          <p>Monday-Friday: <br /> 08:00 am -12:00 am</p>
          <p>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="rights">
        <p>2022 SH-Restaurant. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;