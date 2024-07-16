import React from "react";
import { Link } from "react-router-dom";
import "./Profil.css";

const Profil = () => {
  return (
    <nav className="vertical-navbar">
      <ul>
        <li><Link to="/benutzerkonto" className="vertibar">Benutzerkonto</Link></li>
        <li><Link to="/nachrichten" className="vertibar">Benachrichtigungen</Link></li>
      </ul>
    </nav>
  );
};

export default Profil;
