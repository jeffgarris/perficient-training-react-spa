import React from 'react';
import logo from '../assets/logo.svg';
import '../components/Home.scss';

function Home() {
    return (
        <div className="Home">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Single Page Application</h1>
            </header>
        </div>
    );
}

export default Home;
