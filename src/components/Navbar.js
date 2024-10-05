// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // For basic syling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyApp</h1>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Converter</a></li>
        <li><a href="#">Watchlist</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
