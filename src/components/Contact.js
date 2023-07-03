import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container section" id="contact-section">
      <div className="contact-form">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me:</p>
        <div className="form-inputs">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Submit</button>
        </div>
      </div>
      <div className="contact-picture">
        <img src="your-picture-url" alt="Selfie" />
      </div>
    </div>
  );
};

export default Contact;
