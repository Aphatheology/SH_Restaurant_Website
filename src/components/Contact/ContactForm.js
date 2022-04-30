import React from 'react';
import "./ContactForm.css"; 
import hero from "../../images/heroimg.png";

function ContactForm() {
  return (
    <div className='contactForm'>
        <h2 >Your Feedback</h2>
        <div className='formContain'><form className='form'>
           <div className='input'> <label for= "name">Name</label>
            <input type= "text" id='name' placeholder='Your Name'></input></div>
            <div className='input'><label for= "email">Email</label>
            <input type= "email" id='email' placeholder='Your email'></input></div>
          <div className='input'> <label for="topic-select">Subject:</label>

<select name="Subject" id="topic-select">
    <option value="">--Please choose an option--</option>
    <option value="Food">Food</option>
    <option value="Environment">Environment</option>
    <option value="Staff">Staff</option>
    <option value="Compliment">Compliment</option>
    <option value="Refund">Refund</option>
    
</select></div>
<div className='input'><label for="story">Tell us how you feel:</label>

<textarea id="story" name="story"
          rows="13" cols="30">
Tell us how you feel...
</textarea></div>
<div className='input'><input type="submit" value="Submit" className='submit'></input></div>

        </form><div className='formPic'>
            <img src={hero} alt='sliced dices'/></div></div>

    </div>
  )
}

export default ContactForm