import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/conference">Conference</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button>Sign in</button></li>
          <li><button>Register</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
