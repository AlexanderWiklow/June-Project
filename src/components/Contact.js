import React from 'react';
import './contact.css';

const Contact = () => {
  const handleEmailSubmit = () => {
    const emailAddress = 'a.wiklow@gmail.com';
    const subject = 'Contact Request';
    const body = 'Please enter your message here.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container section" id="contact-section">
      <div className="contact-form">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me:</p>
        <div className="form-inputs">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button onClick={handleEmailSubmit}>Submit</button>
        </div>
      </div>
      <div className="contact-picture">
        <img src="your-picture-url" alt="Selfie" />
      </div>
    </div>
  );
};

export default Contact;
