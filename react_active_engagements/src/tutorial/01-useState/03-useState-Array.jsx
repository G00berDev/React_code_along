import React, { useState } from 'react';
import { data } from '../../data';

const useStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            {people.map((person) => {
                return (
                    <div className="item" key={person.id}>
                        <h3>{person.name}</h3>
                        <button onClick={() => removeItem(person.id)}>Remove</button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setPeople([])}>
                Clear All
            </button>
        </>
    );
};

export default useStateArray;
