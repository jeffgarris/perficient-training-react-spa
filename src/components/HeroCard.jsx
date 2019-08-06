import React from 'react';
import '../components/HeroCard.scss';

function HeroCard(props) {
    return (
        <section className="HeroCard">
            <h2>Hero Cards</h2>
            <div className="cards">
                {props.heros.map((hero, i) => (
                    <div className="card" key={i}>
                        <h3>{hero.name}</h3>
                        <p><strong>Profession:</strong> {hero.profession}</p>
                        <p><strong>Born:</strong> {hero.born}</p>
                        {hero.died && <p><strong>Died:</strong> {hero.died}</p>}
                        <p><strong>Age{hero.died && 'd'}:</strong> {hero.age}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HeroCard;