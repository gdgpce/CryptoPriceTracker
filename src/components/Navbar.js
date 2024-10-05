import React from 'react';
import './navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#converter">Converter</a></li>
                <li><a href="#watchlist">Watchlist</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
