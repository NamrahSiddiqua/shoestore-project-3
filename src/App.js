import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import image from './components/Navbar/logo.png'
// import Update from './components/update';

function App() {
  return (
    <div className="App">
      <img className="logo" src={image} alt="Logo" />
      <Navbar />
      <br />
      {/* <Update /> */}
      <div className="footer">Built in React - by Namrah Siddiqua</div>
    </div>
  );
}

export default App;
