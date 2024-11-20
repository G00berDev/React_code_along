    import React, { useState } from 'react';

    const ErrorExample = () => {
    const [title, setTitle] = useState('random title for a book'); // Using useState

    const handleClick = () => {
        setTitle('updated title'); // Properly updating the state
        console.log('Title updated!');
    };

    return (
        <div>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>
            Change Title
        </button>
        </div>
    );
    };

    export default ErrorExample;
