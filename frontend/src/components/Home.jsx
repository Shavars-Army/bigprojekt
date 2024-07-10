import React from 'react';
import './Home.css'; // Importă fișierul CSS pentru funcția de stil
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import backgroundImage from './media/web binar 1 deget.jpg'; // Importă imaginea

function Home() {
    return (
        <div className="home-container">
            <div className="vertical-text">
                <span>Follow us on Social Media</span>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </div>
            <header className="home-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="header-content">
                    <h1>Discover places near you</h1>
                    <div className="sub-header">This is the best guide of your city</div>
                </div>
            </header>
            <section className="features-section">
                <div className="feature-card" onClick={() => window.location.href = '/hotels'}>Hotels</div>
                <div className="feature-card" onClick={() => window.location.href = '/restaurants'}>Restaurants</div>
                <div className="feature-card" onClick={() => window.location.href = '/shopping'}>Shopping</div>
                <div className="feature-card" onClick={() => window.location.href = '/beauty-spa'}>Beauty & Spa</div>
                <div className="feature-card" onClick={() => window.location.href = '/calendar'}>Calendar</div>
            </section>
            <section className="discover-section">
                <h2>Discover your city with <span className="brand-name" onClick={() => window.location.href = '/your-page-url'}>YOUR SITE NAME</span></h2>
            </section>
        </div>
    );
}

export default Home;

