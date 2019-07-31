import React from 'react';
import '../components/UserCard.scss';

function UserCard(props) {
    return (
        <section className="UserCard">
            <h2>User Cards</h2>
            <div className="cards">
                {props.users.map((user, i) => (
                    <div className="card" key={i}>
                        <h3>{user.name}</h3>
                        <p><strong>Profession:</strong> {user.profession}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default UserCard;