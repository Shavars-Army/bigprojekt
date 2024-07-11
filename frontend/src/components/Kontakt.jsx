import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Kontakt.css';

const Kontakt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vo1647c', 'template_kt48a2k', form.current, {
        publicKey: 'USr9U7luQ11O0kr6V' ,
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
      <div className="section section-one">
        <h1>Ajungeți la [Site Name] peste tot globul</h1>
        <p>Completați acest formular de contact rapid și vă vom contacta imediat.</p>
      </div>
      <div className="form-section">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" required></textarea>

          <input type="submit" value="Send" className="custom-button" />
        </form>
        <div className="info-section">
          <p>Dacă aveți o întrebare despre cum funcționează platforma [Site Name] și sunteți interesat să vorbiți cu un membru al echipei noastre de vânzări, trebuie doar să completați acest formular și vă vom contacta astăzi.</p>
          <p>Dacă trimiteți o cerere de propuneri, vă rugăm să ne contactați prin <a href="mailto:email@example.com">e-mail</a>.</p>
          <p>Dacă sunteți client și aveți nevoie de asistență tehnică, vă rugăm să discutați cu echipa de asistență de la <a href="#">Backstage</a>.</p>
          <p>Dacă aveți probleme tehnice la participarea la un eveniment [Site Name], vă rugăm să consultați <a href="#">Ghidul nostru de ajutor pentru eveniment</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
