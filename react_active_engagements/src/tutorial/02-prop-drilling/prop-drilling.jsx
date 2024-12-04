import { useState } from "react";
import { data } from "./data";  // Make sure the data is correctly imported

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter(person => person.id !== id);
        });
    };

    return (
        <section>
            <h3>Prop Drilling</h3>
            <List people={people} removePerson={removePerson} />
        </section>
    );
}

const List = ({ people, removePerson }) => {
    return (
        <div>
            {people.map(person => {
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                        removePerson={removePerson}
                    />
                );
            })}
        </div>
    );
}

const SinglePerson = ({ name, id, removePerson }) => {
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    );
}

export default PropDrilling;
