import React from 'react';
import ContactForm from './ContactForm';
import "./ContactUs.css";
import gmail from "../Contact/images/Gmail.png";
import facebook from "../Contact/images/Facebook.jpg";
import twitter from "../Contact/images/Twitter.png";
import instagram from "../Contact/images/Instagram.png";
import whatsapp from "../Contact/images/Whatsapp.png";




function ContactUs() {
  return (
    <div className='contactUs' style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL+"/bgfooter.png"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
       <div className ="contactInfo">
           <div className='info'>
               <h2>
                   Address
               </h2>
               <p>
                   Suite 501, Damacus Plaza, Plot 401 Akobo Ojurin , Ibadan, Nigeria
               </p>
           </div>
           <div className='info'>
               <h2>
                   Call/Text Us
               </h2>
               <p>
               <img src={whatsapp} alt="Gmail"/> <p>+234 814 1758 811</p>
             
               
              <p> +234 813 1172 378</p>
               </p>
           </div>
           <div className='info'>
               <h2>Social Media</h2>
               <p>
               <img src={gmail} alt="Gmail"/><br></br>
                   <img src={facebook} alt="facebook"/><br></br>
                   <img src={instagram} alt="instagram"/><br></br>
                   <img src={twitter} alt= "twitter"/><br></br>
               </p>
           </div>

       </div>

       <ContactForm />

    </div>
  )
}

export default ContactUs