import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import "./Homepage.css"
import WhyChooseUs from './WhyChooseUs'


function Homepage() {
  return (
    <div className='homepage'>
        {/* <Navbar /> */}
        <HeroSection />
        <WhyChooseUs />
    </div>
  )
}

export default Homepage