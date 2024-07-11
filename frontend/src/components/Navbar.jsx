import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function MyNavbar({ user, setUser }) {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const timeoutRef = useRef(null);

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
        setUser(null); // Clear the user state on logout
    };

    return (
        <Navbar fixed="top" className="navbar-custom" expand="lg">
            <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
                LOGO {/* Modify this text to change the brand name */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="page-scroll">Home</Nav.Link>
                    <Nav.Link as={Link} to="/conference" className="page-scroll">Conference</Nav.Link>
                    <Nav.Link as={Link} to="/pricing" className="page-scroll">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="page-scroll">About us</Nav.Link>
                    <Nav.Link as={Link} to="/kontakt" className="page-scroll">Kontakt</Nav.Link>
                </Nav>
                <Nav className="ml-auto nav-right">
                    <Nav.Link as={Link} to="/search" className="page-scroll">Search</Nav.Link>
                    {user ? (
                        <>
                            <Nav.Link>Hello {user}</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/signin" className="btn-custom">Sign In</Nav.Link>
                            <Nav.Link as={Link} to="/register" className="btn-custom">Register</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;





