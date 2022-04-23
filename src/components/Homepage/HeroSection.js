import React from 'react'
import HeroImage from '../../images/heroimg.png'

function HeroSection() {
  return (
    <section className="hero">
        <img data-aos="zoom-in" data-aos-duration="1500" data-aos-once="false" src={HeroImage} alt="" />

        <div data-aos="slide-right" data-aos-duration="2000" data-aos-once="false">
            <h2>SH Restaurant - Providing Amazing Dishes</h2>
            <p>
                If breakfast is the most important meal of the day, then brunch is the most important meal of the week. We treat it with the pomp and ceremony it deserves, using farm-fresh ingredients to craft food you'll spend the next six days dreaming about.
            </p>
            <button>View Menu</button>
        </div>
    </section>
  )
}

export default HeroSection