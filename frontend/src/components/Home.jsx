// Home.jsx
import React from 'react';
import './Home.css'; // Import your CSS file for styling

function Home({ user }) {
    return (
        <div>
            <h1>Welcome to the Home Page, <span className="user-name">{user}</span>!</h1>
        </div>
    );
}

export default Home;
