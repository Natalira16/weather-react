import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👋🏼 Hello World 👩🏽‍💻</h1>
        <Weather city="Kyiv" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
