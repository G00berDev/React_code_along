import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'John Doe',
        age: 30,
        message: "John Doe is currently dead",
    });

    const toggleMessage = () => {
        setPerson({
            ...person,
            message:
                person.message === "John Doe is currently dead"
                    ? "John Doe is alive"
                    : "John Doe is currently dead",
        });
    };

    return (
        <div>
            <h3>{person.name}</h3>
            <p>{person.age} years old</p>
            <h4>{person.message}</h4>
            <button className="btn" onClick={toggleMessage}>
                Toggle Message
            </button>
        </div>
    );
};

export default UseStateObject;
