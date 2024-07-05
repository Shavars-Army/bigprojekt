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


import './App.css';// 040724//
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  };
  return (
    <div className="DarkMode">
      <header className="App-header">
        <h1>Meine Website</h1>
        <p>Dies ist ein Beispieltext.</p>
      </header>
      <Footer onToggleTheme={toggleDarkMode} />
    </div>
  );
}

function App() {
    const [data, setData] = useState([]);

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
            <MyNavbar />
            <Routes>
                <Route path="/conference" element={<Conference />} />
                <Route path="/about" element={<About />} />
                <Route path="/benutzerkonto" element={<Benutzerkonto />} />
                <Route path="/einstellungen" element={<Einstellungen />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/nachrichten" element={<Nachrichten />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/zahlungsverlauf" element={<Zahlungsverlauf />} />
            </Routes>
            <div>
                <h1>MySQL Data from AWS RDS</h1>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.user}</li>
                    ))}
                </ul>
            </div>
             <DarkMode/> 
            {/* <Footer/> */}
        </Router>
    );
}
export default App;

// 040724//

