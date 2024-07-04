// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import MyNavbar from './components/Navbar';
import Conference from './components/Conference';
import About from './components/About';
import Benutzerkonto from './components/Benutzerkonto';
import Einstellungen from './components/Einstellungen';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';
import Nachrichten from './components/Nachrichten';
import Pricing from './components/Pricing';
import Profil from './components/Profil';
import Register from './components/Register';
import Signin from './components/Signin';
import Zahlungsverlauf from './components/Zahlungsverlauf';
import Home from './components/Home'; // Import the Home component

function App() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null); // State to manage user

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ' + error);
            });
    }, []);

    useEffect(() => {
        console.log(data); // This will log the updated data whenever it changes
    }, [data]); // Run this effect whenever `data` changes

    return (
        <Router>
            <MyNavbar user={user} setUser={setUser} /> {/* Pass user and setUser as props */}
            <Routes>
                <Route path="/" element={<Home user={user} setUser={setUser}  />} /> {/* Add a route for the home page */}
                <Route path="/conference" element={<Conference />} />
                <Route path="/about" element={<About />} />
                <Route path="/benutzerkonto" element={<Benutzerkonto />} />
                <Route path="/einstellungen" element={<Einstellungen />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/nachrichten" element={<Nachrichten />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/register" element={<Register setUser={setUser} />} /> {/* Pass setUser as prop */}
                <Route path="/signin" element={<Signin setUser={setUser} />} /> {/* Pass setUser as prop */}
                <Route path="/zahlungsverlauf" element={<Zahlungsverlauf />} />
            </Routes>
        </Router>
    );
}

export default App;
