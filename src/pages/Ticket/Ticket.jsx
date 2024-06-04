import React, { useState } from 'react';
import './Ticket.css'
const Ticket = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="adults">Количество взрослых:</label>
        <input
          type="number"
          id="adults"
          name="adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="children">Количество детей:</label>
        <input
          type="number"
          id="children"
          name="children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          min="0"
          required
        />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Ticket;
