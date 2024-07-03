import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Impressum</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
