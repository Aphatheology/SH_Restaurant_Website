import React from 'react'
import How1 from '../../images/how-it-works-1.svg'
import How2 from '../../images/how-it-works-2.svg'
import How3 from '../../images/how-it-works-3.svg'

function WhyChooseUs() {
  return (
        <section className="why-choose">
            <h2>Why choose SH Restaurant?</h2>
            <p className="choose">
                We makes it simple for anybody to use a mobile device to look over our menu and place an order with fast home delivery service
            </p>

            <div className="choose-container">
                <div data-aos="slide-up" data-aos-duration="1000">
                    <img src={How2} alt="" />
                    <h3>Choose your Menu </h3>
                    <p>
                        Browse through our Menu to select the perfecd dish
                    </p>
                </div>

                <div data-aos="slide-up" data-aos-duration="1000">
                    <img src={How1} alt="" />
                    <h3>Set delivery location</h3>
                    <p>
                        Select the location where you want us to deliver
                    </p>
                </div>

                <div data-aos="slide-up" data-aos-duration="1000">
                    <img src={How3} alt="" />
                    <h3>Receive it at your doorstep</h3>
                    <p>
                        Your order will be delivered to you in no time
                    </p>
                </div>

                {/* <div data-aos="slide-left" data-aos-duration="1000">
                    <img src={FoodIcon} alt="" />
                    <h3>Open API</h3>
                    <p>
                        Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                    </p>
                </div> */}

            </div>
    </section>
  )
}

export default WhyChooseUs