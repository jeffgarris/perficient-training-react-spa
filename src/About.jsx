import React from 'react';
// import './sass/About.scss';

function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <h2>Technologies Used:</h2>

            <ul>
                <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> - Version 16.8.6</li>
                <li><a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">react-router-dom</a> - Version 5.0.1</li>
                <li><a href="https://www.npmjs.com/package/node-sass/v/4.12.0" target="_blank" rel="noopener noreferrer">node-sass</a> - Version 4.12.0</li>

                {/* <li><a href="" target="_blank" rel="noopener noreferrer"></a> - Version </li> */}
            </ul>
        </div>
    );
}

export default About;
