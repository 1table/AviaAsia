import React from 'react';
import './Ticket.module.css'

const Ticket = ({ firstName, lastName, email, seat, departureTime, arrivalTime, Class, onClose }) => {
  return (
    <div className="ticket">
      <h2>Airline Ticket</h2>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Seat Preference: {seat}</p>
      <p>Departure Time: {departureTime}</p>
      <p>Arrival Time: {arrivalTime}</p>
      <p>Class:  {Class}</p>
      <button onClick={onClose} className="ticket_button">Close</button>
    </div>
  );
};

export default Ticket;