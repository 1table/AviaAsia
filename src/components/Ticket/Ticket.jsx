import React from 'react';
import s from './Ticket.module.css'


const Ticket = ({ firstName, lastName, email, seat, departureDate, arrivalDate, Class, onClose, from, to}) => {


  return (
    <div className={s.ticket}>
      <h2>Airline Ticket</h2>
      <p>ФИО: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Предпочтение места: {seat}</p>
      {/* <p>Откуда: {from}</p> */}
      {/* <p>Куда: {to}</p> */}
      <p>Дата отбытия: {departureDate}</p>  
      <p>Дата прибытия: {arrivalDate}</p>
      <p>Класс:  {Class}</p>
      <button className={s.ticket_button} onClick={onClose}>Close</button>
    </div>
  );
};

export default Ticket;