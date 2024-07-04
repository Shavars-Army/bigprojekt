import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EventModal({ show, onHide, event }) {
  // Guard against null or undefined event
  if (!event) {
    return null; // or handle the null case gracefully
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Start Time: {event.start.toLocaleString()}</p>
        <p>End Time: {event.end.toLocaleString()}</p>
        <p>Location: {event.location.toLocaleString()}</p>
        <p>
          Link: <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link}</a>
        </p>
        {/* Add more details as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventModal;
