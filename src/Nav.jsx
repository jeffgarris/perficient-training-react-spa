import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import './sass/Nav.scss';

function Nav(props) {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/"><img src={logo} className="nav-logo" alt="logo" /></Link></li>
                <li><Link to="/random">Random functionality</Link></li>
                <li><Link to="/technologies">Technologies</Link></li>
            </ul>
        </div >
    );
}

export default Nav;
