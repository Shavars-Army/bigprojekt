import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function MyNavbar({ user, setUser }) {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowSubMenu(false);
        }, 500);
    };

    useEffect(() => {
        const handleClick = (event) => {
            const anchor = event.target;
            if (anchor.hash !== "") {
                event.preventDefault();
                const hash = anchor.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        const anchors = document.querySelectorAll('a.page-scroll');
        anchors.forEach(anchor => anchor.addEventListener('click', handleClick));

        return () => {
            anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
        };
    }, []);

    const handleLogout = () => {
        setUser(null); 
        //localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmail');
        
         navigate('/'); 
         window.location.reload();// Clear the user state on logout
    };

    return (
        <Navbar fixed="top" className="navbar-transparent" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="page-scroll">Home</Nav.Link>
                    <Nav.Link as={Link} to="/conference" className="page-scroll">Conference</Nav.Link>
                    <Nav.Link as={Link} to="/pricing" className="page-scroll">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="page-scroll">About us</Nav.Link>
                    <Nav.Link as={Link} to="/kontakt" className="page-scroll">Kontakt</Nav.Link>
                </Nav>
                <Nav>
                    {user ? (
                        <>
                            <Nav.Link>Hello {user}</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/signin" className="page-scroll">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register" className="page-scroll">Register</Nav.Link>
                        </>
                    )}
                    <NavDropdown
                        title="Profil"
                        id="basic-nav-dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        show={showSubMenu}
                    >
                        <NavDropdown.Item as={Link} to="/benutzerkonto" className="page-scroll">Benutzerkonto</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/zahlungsverlauf" className="page-scroll">Zahlungsverlauf</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/nachrichten" className="page-scroll">Nachrichten</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/einstellungen" className="page-scroll">Einstellungen</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
