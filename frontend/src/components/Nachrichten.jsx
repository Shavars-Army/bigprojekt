import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Nachrichten.css';
import Profil from './Profil.jsx';

const Nachrichten = () => {
    const [emails, setEmails] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [isNewEmail, setIsNewEmail] = useState(false); // State to track new emails

    useEffect(() => {
        fetchEmails();
        const storedEmail = localStorage.getItem('userEmail');
        setUserEmail(storedEmail);
    }, []);

    useEffect(() => {
        // Check for new emails whenever emails state changes
        checkForNewEmails();
    }, [emails]);

    useEffect(() => {
        // Restore read status from localStorage on component mount
        restoreReadStatus();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/emails'); // Adjust URL if needed
            setEmails(response.data); // Set emails in state
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    const checkForNewEmails = () => {
        // Logic to check for new emails compared to previously fetched emails
        // For simplicity, let's assume new emails are those received after the initial fetch
        const hasNewEmail = emails.some(email => !email.read); // Assuming emails have a 'read' field
        setIsNewEmail(hasNewEmail);
    };

    const restoreReadStatus = () => {
        // Restore read status from localStorage
        const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
        setEmails(storedEmails);
    };

    const handleEmailClick = async (email) => {
        setSelectedEmail(email);
        
        // Update read status locally (optimistic update)
        const updatedEmails = emails.map(e => {
            if (e.id === email.id) {
                return { ...e, read: true };
            }
            return e;
        });
        setEmails(updatedEmails);

        // Save updated emails to localStorage
        localStorage.setItem('emails', JSON.stringify(updatedEmails));

        // Alternatively, update read status on the server
        try {
            await axios.put(`http://localhost:3001/api/emails/${email.id}`, { read: true });
        } catch (error) {
            console.error('Error updating read status:', error);
        }
    };

    const handleBackClick = () => {
        setSelectedEmail(null);
    };

    return (
        <div className="benutzerkonto-container">
            <Profil />
            <div className="content-container">
                <div className="header-content-wrapper">
                    <div className="header-content">
                        <h1>Nachrichten {isNewEmail && <span className="notification-symbol">•</span>}</h1>
                        {/* Display notification symbol conditionally */}
                    </div>
                </div>
                <div className="main-content">
                    {selectedEmail ? (
                        <div className="email-details">
                            <button onClick={handleBackClick} className="back-button">Zurück</button>
                            <h3>{selectedEmail.subject}</h3><br></br>
                            <p>{selectedEmail.body}</p><br></br>
                            <small>Gesendet an: {selectedEmail.recipient}</small>
                        </div>
                    ) : (
                        <div className="email-list">
                            <ul>
                                {emails && emails.length > 0 ? (
                                    emails.map((email) => userEmail === email.recipient && (
                                        <li key={email.id} className="email-item">
                                            <a href="#" onClick={() => handleEmailClick(email)} className="email-subject-link">{email.subject} {email.read ? '' : '(Ungelesen)'}</a>
                                            {/* Display unread indicator */}
                                            <small className="email-recipient">Gesendet an: {email.recipient}</small>
                                        </li>
                                    ))
                                ) : (
                                    <li>Keine E-Mails vorhanden</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nachrichten;
