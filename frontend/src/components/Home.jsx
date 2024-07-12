import React, { useState, useEffect } from 'react';
import ConferenceTile from './ConferenceTile';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { Modal, Button } from 'react-bootstrap';

const Home = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newConference, setNewConference] = useState({
    name: '',
    description: '',
    startdate: '',
    enddate: '',
    starttime: '',
    endtime: '',
    location: '',
    link: '',
    participant_emails: [],
  });
  const [viewConference, setViewConference] = useState(null); // State für die angezeigte Konferenz

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (user) {
      setUserEmail(storedEmail);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/conferences`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      const modifiedData = jsonData.map(item => ({
        ...item,
        startdate: new Date(item.startdate),
        enddate: new Date(item.enddate),
      }));
      modifiedData.sort((a, b) => a.startdate - b.startdate);

      setData(modifiedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const onChangeDate = date => {
    setSelectedDate(date);
  };

  const handleEventClick = event => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const openCreateForm = () => {
    setShowCreateForm(true);
  };

  const closeCreateForm = () => {
    setShowCreateForm(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'participant_emails') {
      const emailsArray = value.split(',').map(email => email.trim());
      setNewConference(prevConference => ({
        ...prevConference,
        [name]: emailsArray,
      }));
    } else {
      setNewConference(prevConference => ({
        ...prevConference,
        [name]: value,
      }));
    }
  };

  const handleCreateConference = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/conferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConference),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      fetchData();
      setShowCreateForm(false);
      setNewConference({
        name: '',
        description: '',
        startdate: '',
        enddate: '',
        starttime: '',
        endtime: '',
        location: '',
        link: '',
        participant_emails: [],
      });
    } catch (error) {
      console.error('Error creating conference:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Wenn ein Event ausgewählt ist, zeige die Detailansicht an

  // Standardansicht mit Konferenzkacheln und Kalender
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to the Home Page, <span className="user-name">{user}!</span></h1>
      </div>
      <div className="conferences-container">
        {data.map((item) => (
          item.participant_email === userEmail && (
            <div key={item.id} className="conference-item" >
              <h3>{item.name}</h3>
              <p><strong>Start:</strong> {item.startdate.toLocaleDateString()}</p>
              <p><strong>End:</strong> {item.enddate.toLocaleDateString()}</p>
              <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
      <p><strong>Participant Email:</strong> {item.participant_email}</p>
            </div>
          )
        ))}
      </div>
      <div className="calendar-container">
       
        
      </div>

    </div>
  );
};

export default Home;