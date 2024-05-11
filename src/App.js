import React from 'react';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import Support from './pages/Support/Support'


function App() {
  return (
    <div className="App">

      <Home />
      <Support />
    </div>
  );
}

export default App;
