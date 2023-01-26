import React from 'react';
import WhatsappQR from '../assets/whatsappqr.png';
import BannerImage from "../assets/RedandBlackBanner.png";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='leftSide' style={{ backgroundImage: `url(${WhatsappQR})` }}></div>
        <div className='rightSide'>
            <h1> Contact Me </h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'> Full Name </label>
                <input name='name' placeholder='Enter full name...' type="text" />
                <label htmlFor='email'> Email </label>
                <input name='email' placeholder='Enter email...' type="email" />
                <label htmlFor='message'> Message </label>
                <textarea rows="6" placeholder="Enter Message..." name='message' required></textarea>
                <button type='submit'> Send Email </button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
