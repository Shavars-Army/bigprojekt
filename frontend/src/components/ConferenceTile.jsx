import React from 'react';

const ConferenceTile = ({ conference }) => {
  return (
    <div className="conference-tile">
      <h3>{conference.name}</h3>
      <p><strong>Description:</strong> {conference.description}</p>
      <p><strong>Start Date:</strong> {new Date(conference.startdate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(conference.enddate).toLocaleDateString()}</p>
      <p><strong>Start Time:</strong> {conference.starttime}</p>
      <p><strong>End Time:</strong> {conference.endtime}</p>
      <p><strong>Location:</strong> {conference.location}</p>
      <p><strong>Link:</strong> <a href={conference.link} target="_blank" rel="noopener noreferrer">{conference.link}</a></p>
      <p><strong>Participant Email:</strong> {conference.participant_email}</p>
    </div>
  );
};

export default ConferenceTile;
