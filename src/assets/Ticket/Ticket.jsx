import React from 'react';
import s from './Ticket.module.css'

const Ticket = ({ firstName, lastName, email, seat, departureDate, arrivalDate, Class, onClose }) => {
  return (
    <div className={s.ticket}>
      <h2>Airline Ticket</h2>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Seat Preference: {seat}</p>
      <p>Departure Date: {departureDate}</p>
      <p>Arrival Date: {arrivalDate}</p>
      <p>Class:  {Class}</p>
      <button className={s.ticket_button} onClick={onClose}>Close</button>
    </div>
  );
};

export default Ticket;