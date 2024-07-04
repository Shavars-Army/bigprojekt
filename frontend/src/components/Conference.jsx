import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import EventModal from './EventModal'; // Adjust path as per your project structure

const localizer = momentLocalizer(moment);

function Page1() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: 'Team 2 Meeting',
      start: new Date(2024, 6, 1, 10, 0),
      end: new Date(2024, 6, 1, 12, 0),
      location : 'online',
      link : 'https://meet.google.com/fgr-mxtd-jxk',
      test : "blabla"

    },{
      title: 'Team 2 Meeting',
      start: new Date(2024, 9, 1, 10, 0),
      end: new Date(2024, 9, 1, 12, 0),
      location : 'online',
      link : 'https://meet.google.com/fgr-mxtd-jxk',
    }
    // Add more events as needed
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='container'>
    
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li>Dashboard</li>
        <li>Create</li>
        <li>Search</li>
        <li><Link to="/page2">Go to Page 2</Link></li>
      </ul>
    </div>
    <div>
      <h1>Konferenz</h1>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          locationAccessor = "location"
          linkAccessor = "link"
          style={{ margin: '50px' }}
          onSelectEvent={handleEventClick}
        />
        <EventModal show={showModal} onHide={closeModal} event={selectedEvent} />
      </div>
    </div>
    </div>
  );
}

export default Page1;
