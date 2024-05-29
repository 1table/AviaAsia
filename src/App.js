import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home';
import Header from './Header/Header'
import About from './pages/About/About';
import Search from './search/search1'
import Search2 from './search/search2'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/search' element={<Search/>} />
        <Route path ='/search2' element={<Search2/>} />
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
