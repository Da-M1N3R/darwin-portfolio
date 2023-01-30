import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import WhatsappQR from '../assets/whatsappqr.png';
import BannerImage from "../assets/RedandBlackBanner.png";
import '../styles/Contact.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_0motm1m', // YOUR_SERVICE_ID
        'template_s916ado', // YOUR_TEMPLATE_ID
        form.current, 
        'qQzjlx0NbvuzxqsSJ', // YOUR_PUBLIC_KEY
        )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='leftSide' style={{ backgroundImage: `url(${WhatsappQR})` }}></div>
        <div className='rightSide'>
            <h1> Contact Me </h1>

            <form ref={form} id='contact-form' method='POST' onSubmit={sendEmail}>
                <label htmlFor='name'> Full Name </label>
                <input name='user_name' placeholder='Enter full name...' type="text" />
                <label htmlFor='email'> Email </label>
                <input name='user_email' placeholder='Enter email...' type="email" />
                <label htmlFor='message'> Message </label>
                <textarea rows="6" placeholder="Enter Message..." name='message' required></textarea>
                <button type='submit'> Send Email </button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
