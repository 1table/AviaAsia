import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home';
import Header from './Header/Header'
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/Главная' element={<Home/>} />
        <Route path ='/О нас' element={<About/>} />
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
