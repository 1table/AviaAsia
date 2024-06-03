import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import About from './pages/About/About';
import Search from './components/search/search1'
import Search2 from './components/search/search2'
import Registration from './pages/Registration/Registration';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import Ticket from './assets/Registration/RegistrationForm'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
      <RegistrationForm />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/search' element={<Search/>} />
        <Route path ='/search2' element={<Search2/>} />
        <Route path="/registration" component={<Registration/>} />
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
