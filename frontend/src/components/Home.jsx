import React from 'react';
import './Home.css'; // Import your CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <aside className="sidebar">
                <div className="sidebar-content">
                    <p className="sidebar-title">Follow on Social Media</p>
                    <div className="social-icons">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-tiktok"></i></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </aside>
            <header className="home-header">
                
                    <h1>Discover your place</h1>
                    <p>This is the best Conference platform</p>
                
            </header>
            <section className="features-section">
                <div className="feature-card"><a href="#">Buton 1</a></div>
                <div className="feature-card"><a href="#">Buton 2</a></div>
                <div className="feature-card"><a href="#">Buton 3</a></div>
                <div className="feature-card"><a href="#">Buton 4</a></div>
                <div className="feature-card"><a href="#">Buton 5</a></div>
            </section>
            <section className="discover-section">
                <h2>Welcome to the future</h2>
            </section>
        </div>
    );
}

export default Home;


