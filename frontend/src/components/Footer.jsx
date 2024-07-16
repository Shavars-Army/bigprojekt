// Footer.jsx
import React from 'react';
import DarkModeButton from './DarkModeButton';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="text">&copy; {new Date().getFullYear()} Ihr Unternehmen. Alle Rechte vorbehalten.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
