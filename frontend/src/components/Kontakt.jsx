import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Kontakt.css';

const Kontakt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vo1647c', 'template_kt48a2k', form.current, {
        publicKey: 'kxnKAqBqfqr5mxlU8',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent!');
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="kontakt-container">
      <div className="section-one">
        <h1>Reach [Site Name] all over the globe</h1>
        <p>Fill out this quick contact form and we will get in touch with you immediately.</p>
      </div>
      <div className="form-section">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" required></textarea>

          <input type="submit" value="Send" className="custom-button" />
        </form>
        <div className="info-section">
          <p>If you have a question about how the [Site Name] platform works and are interested in speaking with a member of our sales team, simply fill out this form and we will contact you today.</p>
          <p>If you are submitting a request for proposals, please contact us.</p>
          <p>If you are a customer and need technical support, please speak with the support team at .</p>
          <p>If you are experiencing technical difficulties participating in a [Site Name] event, please check our .</p>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;