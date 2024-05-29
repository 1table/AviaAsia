import React from 'react';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import Header from './assets/Header/Header'
import About from './pages/About/About'
import Ticket from './assets/Registration/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Ticket />  
     <Header />
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/about' element = {<About/>} />
      </Routes>
    </div>
  );
}

export default App;
