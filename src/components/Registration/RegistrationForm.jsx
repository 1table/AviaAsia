import React, { useState } from 'react';
import Ticket from '../../components/Ticket/Ticket';
import s from './RegistrationForm.module.css'

import SearchForm from '../../components/SeachForm/SeachForm';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [seat, setSeat] = useState('');
  // const [Ticket, setTicket] = useState(false);
  const [isTicket, setIsTicket] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [Class, setClass] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsTicket(true);
  };

  const handleClose = () => {
    setIsTicket(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.registration_container}> 
        <div className={s.registration_div}>
          Имя:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={s.registration_input}
          />
        </div>
        <div className={s.registration_div}>
          Фамилия:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={s.registration_input}
          />
        </div>
        <div className={s.registration_div}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={s.registration_input}
          />
        </div>
        <div>
          Класс:
          <select value={Class} onChange={(e) => setClass(e.target.value)}>
            <option value="econom">эконом</option>
            <option value="business">бизнес</option>
          </select>

          <SearchForm />
          
        </div>
        <div className={s.registration_div}>
         Предпочтение места:
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
        <div className={s.registration_div}>
        Дата отбытия:
        <input
          type="date"
          value={departureDate} 
          onChange={(e) => setDepartureDate(e.target.value)}
          className={s.registration_input}
        />
      </div>
      <div className={s.registration_div}>
       Дата прибытия:
        <input
          type="date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          className={s.registration_input}
        />
        </div>
      <button type="submit" className={s.registration_button} class="btn btn-primary btn-lg">Купить билет</button>
      </form> 

      {/* {Ticket && < Ticket firstName={firstName} lastName={lastName} email={email} seat={seat} departureTime={departureTime} arrivalTime={arrivalTime} Class={Class} onClose={handleClose} />}
    </> */}
        {isTicket &&
          <Ticket firstName={firstName} 
          lastName={lastName} 
          email={email} 
          seat={seat} 
          departureDate={departureDate} 
          arrivalDate={arrivalDate} 
          Class={Class} 
          where={inputValue}
          back={inputValue2}

          
          onClose={handleClose} />}
    </>
  );
}

export default RegistrationForm;