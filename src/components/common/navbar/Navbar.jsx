import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
function Navbar() {

    return(
        <section className="navbar">
        <Link to="/" className="navbar-item">PLAY</Link>
        <Link to="/statistics" className="navbar-item">Statistics</Link>
        <Link to="/gameinstructions" className="navbar-item">game instructions</Link>
        <Link to="/techbackground" className="navbar-item">Technological background</Link>
        <Link to="/aboutus" className="navbar-item">About us</Link>
        </section>
    )
}

export default Navbar;