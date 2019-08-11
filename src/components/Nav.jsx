import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Nav(props) {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/"><img src={logo} className="nav-logo" alt="logo" /></Link></li>
                <li><Link to="/random">Random components</Link></li>
                <li><Link to="/technologies">Technologies</Link></li>
            </ul>
        </div >
    );
}

export default Nav;
