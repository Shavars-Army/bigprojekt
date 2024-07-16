import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MyNavbar from './components/Navbar';
import Conference from './components/Conference';
import About from './components/About';
import Benutzerkonto from './components/Benutzerkonto';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';
import Nachrichten from './components/Nachrichten';
import Pricing from './components/Pricing';
import Pricing1 from './components/Pricing1';
import Profil from './components/Profil';
import Register from './components/Register';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    return (
        <Router>
            <MyNavbar user={user} setUser={setUser} /> {/* Pass openModal as a prop */}
            <Routes>
                <Route path="/" element={<Home user={user} setUser={setUser} />} /> {/* Add a route for the home page */}
                <Route path="/conference" element={<Conference user={user} setUser={setUser} />} />
                <Route path="/about" element={<About />} />
                <Route path="/benutzerkonto" element={<Benutzerkonto />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/nachrichten" element={<Nachrichten />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing1" element={<Pricing1 />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="/signin" element={<Signin setUser={setUser} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
