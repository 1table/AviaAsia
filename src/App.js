import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home';
import Support from './pages/Support/Support'
import Header from './pages/Header/Header'
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/Home' element={<Home />} />
        <Route path ='/About' element={<About />} />
        <Route path ='/Support' element={<Support />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
