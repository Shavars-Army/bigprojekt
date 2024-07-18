import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { Modal, Button } from 'react-bootstrap';
import JitsiMeetComponent from './JitsiMeetComponent';

const Home = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
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
  const [viewConference, setViewConference] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (user) {
      setUserEmail(storedEmail);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [userEmail]);

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

  return (
    <>
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
        {!user && (
          <div className="homediv">
            <div className="hello1">
            Welcome to our Conference Management Website.<br />
            Plan and manage your conferences easily and efficiently with our user-friendly platform.<br /><br />
            Create new conferences, browse existing ones, and enjoy seamless collaboration with all your participants.<br />
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FnY7pfT5euI?si=GTqHvezbt-Kg6lJm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
      )}
        {user && (
          <>
          <header className="home-header">
          <h1 className="textvariant">Welcome, {user}!</h1>
          </header>
          <div className="zentierer">
            <h2 className="overevent">Upcoming Events:</h2>
          </div>
          </>
        )}
        <div className="conferences-container">
          {data.map((item) => (
            (!item.participant_email || item.participant_email === userEmail) && (
              <div key={item.id} className="conference-item">
                <h3>{item.name}</h3>
                <p><strong>Start:</strong> {item.startdate.toLocaleDateString()}</p>
                <p><strong>End:</strong> {item.enddate.toLocaleDateString()}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">Hier drücken</a></p>
                {item.participant_email && <p><strong>Participant Email:</strong> {item.participant_email}</p>}
              </div>
            )
          ))}
        </div>
      </div>
      <div className="calendar-container">
      </div>
    </>
  );
};

export default Home;
