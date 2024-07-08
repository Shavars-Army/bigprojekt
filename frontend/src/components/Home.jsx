import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Modal, Button } from 'react-bootstrap';

const Home = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/data`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      const modifiedData = jsonData.map(item => ({
        ...item,
        startdate: new Date(item.startdate),
        enddate: new Date(item.enddate),
      }));

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
    setShowModal(true);
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Inline CSS styles
  const calendarStyles = {
    calendar: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    calendarEvent: {
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: '50%',
      padding: '2px',
    },
  };

  return (
    <div>
      <div>
        <h1>Welcome to the Home Page, <span className="user-name">{user}</span>!</h1>
      </div>
      <h2>Your Conferences</h2>
      <ul>
        {data.map(item => (
          item.participant_email === userEmail && (
            <li key={item.id}>
              ID: {item.id} <br />
              Description: {item.description} <br />
              Start Date: {item.startdate.toLocaleDateString()} <br />
              End Date: {item.enddate.toLocaleDateString()} <br />
              Start Time: {item.starttime} <br />
              End Time: {item.endtime} <br />
              Location: {item.location} <br />
              Link: {item.link} <br />
              Participant Email: {item.participant_email} <br />
            </li>
          )
        ))}
      </ul>
      <h2>Calendar View</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Calendar
          onChange={onChangeDate}
          value={selectedDate}
          tileClassName={({ date }) =>
            data.some(item => item.participant_email === userEmail && date >= item.startdate && date <= item.enddate)
              ? 'calendar-event'
              : null
          }
          tileContent={({ date, view }) =>
            view === 'month' &&
            data.some(item => item.participant_email === userEmail && date >= item.startdate && date <= item.enddate) && (
              <p>Event</p>
            )
          }
          onClickDay={(value, event) => {
            const eventsOnDay = data.filter(
              item =>
                item.participant_email === userEmail &&
                value >= item.startdate &&
                value <= item.enddate
            );
            if (eventsOnDay.length > 0) {
              handleEventClick(eventsOnDay[0]);
            }
          }}
          className={calendarStyles.calendar}
        />
      </div>

      {/* Event Modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <>
            <p><strong>Name:</strong> {selectedEvent.name}</p>
            <p><strong>Start:</strong> {selectedEvent.startdate.toLocaleDateString()}</p>
            <p><strong>End:</strong> {selectedEvent.enddate.toLocaleDateString()}</p>
            <p><strong>Start:</strong> {selectedEvent.starttime}</p>
            <p><strong>End:</strong> {selectedEvent.endtime}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <p><strong>Link:</strong> <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer">{selectedEvent.link}</a></p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;