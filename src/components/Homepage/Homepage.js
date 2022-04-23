import React from 'react'
import HeroSection from './HeroSection'
import "./Homepage.css"
import WhyChooseUs from './WhyChooseUs'


function Homepage() {
  return (
    <div className='homepage'>
        <HeroSection />
        <WhyChooseUs />
    </div>
  )
}

export default Homepage