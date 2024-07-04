import React from 'react';
import './Footer.css';
import ReactDOM from 'react-dom';
//import Impressum from './impressum.jsx';
//import Info from './datenschutz.jsx';
//import Karriere from './kontakt.jsx';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <p>&copy; {new Date().getFullYear()} Konferenz-Service IT GmbH <p></p>Alle Rechte vorbehalten.</p>
         
      </div>
    </footer>
  );
};

//export default Footer;
//<ul className="footer-links">12
//<li><a href="#">Impressum</a></li>
//<li><a href="#">Datenschutz</a></li>
//<li><a href="#">Kontakt</a></li>
//</ul>
// const Footer = ({ onToggleTheme }) => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>&copy; {new Date().getFullYear()} Ihr Unternehmen. Alle Rechte vorbehalten.</p>
//          <ul className="footer-links">
//           <li><a href="#">Impressum</a></li>
//          <li><a href="#">Datenschutz</a></li>
//           <li><a href="#">Kontakt</a></li>
//          </ul>
//         <button onClick={onToggleTheme}>Dark Mode</button>
//        </div>
//    </footer>
//   );
// };

export default Footer;