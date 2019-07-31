import React from 'react';
import '../components/Counter.scss';

function Counter(props) {
    return (
        <section className="Counter">
            <h2>Counter</h2>
            <div className="counter">
                <div className="button" onClick={props.onDecrement}>-</div>
                <span className="count">{props.count}</span>
                <div className="button" onClick={props.onIncrement}>+</div>
            </div>
        </section>
    );
}

export default Counter;