import React from 'react';
const Header = () => { //This defines a functional component named Header. Functional components are a type of component in React that are essentially JavaScript functions.They take inputs, known as props, and return React elements (i.e., JSX)
    return (
        <header className="header">
            <h1>TO-DO</h1>
        </header>
    );
}
export default Header;//This exports the Header component so that it can be imported and used in other files.
