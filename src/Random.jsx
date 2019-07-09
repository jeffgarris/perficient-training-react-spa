import React from 'react';
import './sass/Random.scss';

function Random(props) {
    return (
        <div className="Random">
            <h1>Random Functionality</h1>

            <h2>Counter</h2>
            <div className="counter">
                <div className="button" onClick={props.onDecrement}>-</div>
                <span className="count">{props.count}</span>
                <div className="button" onClick={props.onIncrement}>+</div>
            </div>
        </div>
    );
}

export default Random;
