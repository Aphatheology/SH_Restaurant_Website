import React from 'react';
import './Footer.css';

const Subscribe = () => {
  return (
    <div className="sub">
      <div className="newsletter">
        <p>Newsletter</p>
        <h2>Subscribe to Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
      </div>
      <div className="form">
        <input type="email" placeholder="Email Address" name="email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe;
