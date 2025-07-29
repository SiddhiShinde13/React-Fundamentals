import React from 'react';
const HelloWorld = () => {
    return (
        <div>
            <h1 className='title'>Title</h1>
            <h2>Subtitle</h2>
            <p>This is a paragraph.</p>
            <button onClick = {() => alert('Button clicked!')}>Click Me</button>
        </div>
    )

    // Using React.createElement to create an element without JSX
    //return React.createElement('h1', null, 'Hello World!');
};

export default HelloWorld;
