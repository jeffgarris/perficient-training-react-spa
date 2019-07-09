import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Random.scss';

function Random(props) {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://gateway.marvel.com:443/v1/public/characters?name=hulk&orderBy=name&limit=12&apikey=c742ff52fd52d3bc6f31c469c69ea4b4'
        );

        const items = await data.json();

        console.log(items.data.results[0]);

        setItems(items.data.results[0]);
    }

    return (
        <div className="Random">
            <h1>Random Functionality</h1>

            <h2>Counter</h2>
            <div className="counter">
                <div className="button" onClick={props.onDecrement}>-</div>
                <span className="count">{props.count}</span>
                <div className="button" onClick={props.onIncrement}>+</div>
            </div>

            <div className="marvel-api">
                {/* {items.map(item => (
                    <li key={item.itemid}>
                        <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                        <Link to={`/shop/${item.itemid}`}><img src={item.item.image} width="100" alt={item.name} /></Link>
                    </li>
                ))} */}
            </div>
        </div>
    );
}

export default Random;
