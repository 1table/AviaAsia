import React, { useState } from 'react';


function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [seat, setSeat] = useState('');
  const [Ticket, setTicket] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [Class, setClass] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    setTicket(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="registration_container">
        <div className="registration_div">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="registration_input"
          />
        </div>
        <div className="registration_div">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="registration_input"
          />
        </div>
        <div className="registration_div">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registration_input"
          />
        </div>
        <div>
          <select value={Class} onChange={(e) => setClass(e.target.value)}>
            <option value="econom">эконом</option>
            <option value="business">бизнес</option>
          </select>
          
        </div>
        <div className="registration_div">
          Seat Preference:
          <select value={seat} onChange={(e) => setSeat(e.target.value)}>
            <option value="">Select a seat</option>
            <option value="1A"> 1A </option>
            <option value="1B"> 1B </option>
            <option value="1C"> 1C </option>
            <option value="2A"> 2A </option>
            <option value="2B"> 2B </option>
            <option value="2C"> 2C </option>
            <option value="3A"> 3A </option>
            <option value="3B"> 3B </option>
            <option value="3C"> 3C </option>

            <option value="1A"> 1D </option>
            <option value="1B"> 1E </option>
            <option value="1C"> 1F </option>
            <option value="2A"> 2D </option>
            <option value="2B"> 2E </option>
            <option value="2C"> 2F </option>
            <option value="3A"> 3D </option>
            <option value="3B"> 3E </option>
            <option value="3C"> 3F </option>
          </select>
        </div>
        <div className="registration_div">
          Departure Time:
          <input
            type="time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            className="registration_input"
          />
        </div>
        <div className="registration_div">
          Arrival Time:
          <input
            type="time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="registration_input"
          />
        </div>
        <button type="submit" className="registration_button">Buy</button>
      </form>

      {Ticket && (
        <div className="ticket">
        <h2>Airline Ticket</h2>
        <p>Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Seat Preference: {seat}</p>
        <p>Departure Time: {departureTime}</p>
        <p>Arrival Time: {arrivalTime}</p>
        <p>Class:  {Class}</p>
        <button onClick={() => setTicket(false)} className="ticket_button">Close</button>
        </div>
      )}
    </>
  );
}

export default RegistrationForm;