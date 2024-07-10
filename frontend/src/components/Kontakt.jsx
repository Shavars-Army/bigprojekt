import React from 'react';
import './Kontakt.css';
import background1 from './media/AboutSectionOne.jpg';

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <div className="section section-one">
        <h1>Ajungeți la [Site Name] peste tot globul</h1>
        <p>Completați acest formular de contact rapid și vă vom contacta imediat.</p>
      </div>
      <div className="form-section">
        <form>
          <label htmlFor="email">E-mail*</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="role">Rol*</label>
          {/* Asigură-te că adaugi input/select pentru rol */}
          <input type="text" id="role" name="role" required />

          <label htmlFor="discussion">Ce ați dori să discutați?</label>
          <textarea id="discussion" name="discussion"></textarea>

          <label htmlFor="how-heard">Cum ați auzit despre noi?</label>
          <textarea id="how-heard" name="how-heard"></textarea>

          <button type="submit" className="custom-button">Trimite</button>
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
