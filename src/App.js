import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import image from './components/Navbar/logo.png'
import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <img className="logo" src={image} alt="Logo" />
      <Navbar />
      <div className="footer">Built in React - by Namrah Siddiqua</div>
    </div>
  );
}

export default App;
