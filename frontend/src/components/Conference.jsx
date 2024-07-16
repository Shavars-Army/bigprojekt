import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Conference.css";
import { Modal, Button } from 'react-bootstrap';

const Conference = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [search, setSearch] = useState("");
  const [newConference, setNewConference] = useState({
    organisator :"",
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

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    //alert(user)
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

      setData(modifiedData);
     // console.log(modifiedData)
     // alert(data[10].participant_email)
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
     await  fetchData(); // Refresh conference data
     
      setShowCreateForm(false); // Close the form
      setNewConference({  // Reset form fields
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
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
     // alert("hallo")
     
    } catch (error) {
      console.error('Error creating conference:', error);
      // Add additional error handling as needed
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

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
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {showCreateForm ? (
        <div className="create-form">
          <hr></hr>
        <hr></hr>
        <hr></hr>
          <h2>Create Conference</h2>
          <form onSubmit={handleCreateConference}>
          <label>
              Organisator:
              <input type="text" name="organisator" value={newConference.organisator} onChange={handleInputChange} required />
            </label>
            <label>
              Name:
              <input type="text" name="name" value={newConference.name} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Description:
              <textarea name="description" value={newConference.description} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Start Date:
              <input type="date" name="startdate" value={newConference.startdate} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              End Date:
              <input type="date" name="enddate" value={newConference.enddate} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Start Time:
              <input type="time" name="starttime" value={newConference.starttime} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              End Time:
              <input type="time" name="endtime" value={newConference.endtime} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Location:
              <input type="text" name="location" value={newConference.location} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Link:
              <button>Generate Link</button>
              <input type="url" name="link" value={newConference.link} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Participants (comma-separated):
              <input type="text" name="participant_emails" value={newConference.participant_emails.join(', ')} onChange={handleInputChange} required />
            </label>
            <br />
            <button type="submit">Create</button>
          </form>
          <button onClick={closeCreateForm}>Close</button>
        </div>
      ) : (
        <div className="sidebar">
          <button onClick={openCreateForm}>Create Conference</button>
          <label>
              Search by Name/Description:
              <input type="text" name="" value={search}onChange={(e) => setSearch(e.target.value)} required />
            </label>
         
          <div> <ol>
          {data.map(item => (
  (search && (item.description.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())))  && item.participant_email === userEmail && (
    <li key={item.id} className="conference-item">
      <div className="conference-details">
      <span><strong>Name:</strong> {item.name}</span><br />
        <span><strong>Description:</strong> {item.description}</span><br />
        <span><strong>Start Date:</strong> {new Date(item.startdate).toLocaleDateString()}</span><br />
        <span><strong>End Date:</strong> {new Date(item.enddate).toLocaleDateString()}</span><br />
        <span><strong>Start Time:</strong> {item.starttime}</span><br />
        <span><strong>End Time:</strong> {item.endtime}</span><br />
        <span><strong>Location:</strong> {item.location}</span><br />
        <span><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></span><br />
        <span><strong>Participant Email:</strong> {item.participant_email}</span><br />
      </div>
    </li>
  )
))}

        </ol> </div>
                  </div>
      )}
      <div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        
        <ol>
          
        </ol>
        <h2>Calendar View</h2>
        <div className="calendar-container">
          <Calendar
            onChange={onChangeDate}
            value={selectedDate}
            tileClassName={({ date }) =>
              data.some(item => item.participant_email === userEmail && date >= new Date(item.startdate) && date <= new Date(item.enddate))
                ? 'calendar-event'
                : null
            }
            tileContent={({ date, view }) =>
              view === 'month' &&
              data.some(item => item.participant_email === userEmail && date >= new Date(item.startdate) && date <= new Date(item.enddate)) && (
                <p>Event</p>
              )
            }
            onClickDay={(value, event) => {
              const eventsOnDay = data.filter(
                item =>
                  item.participant_email === userEmail &&
                  value >= new Date(item.startdate) &&
                  value <= new Date(item.enddate)
              );
              if (eventsOnDay.length > 0) {
                handleEventClick(eventsOnDay[0]);
              }
            }}
            className="calendar"
          />
        </div>
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
              <p><strong>Participant Email:</strong> {selectedEvent.participant_email}</p>
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

export default Conference;