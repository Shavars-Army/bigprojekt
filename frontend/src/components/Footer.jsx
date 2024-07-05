import React from 'react';
import './Footer.css';
import ReactDOM from 'react-dom';
//040724//
const Footer = ({ onToggleTheme }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ihr Unternehmen. Alle Rechte vorbehalten.</p>
        <button onClick={onToggleTheme}>Dark Mode</button>
        
      </div>
    </footer>
  );
};
export default Footer;



