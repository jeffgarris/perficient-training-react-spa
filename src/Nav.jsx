import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import './sass/Nav.scss';

function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/"><img src={logo} className="nav-logo" alt="logo" /></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div >
    );
}

export default Nav;
