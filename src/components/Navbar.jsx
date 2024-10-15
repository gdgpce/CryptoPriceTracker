// src/components/Navbar.js
import React from 'react'; 
import './navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Crypto Tracker</h2>
      </div>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '  Light Mode' : ' Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
