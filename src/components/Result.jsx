import React from 'react';

const Result = ({ selectedOption }) => {
    return (
        <div>
            <h2>Selected Option</h2>
            <p>{selectedOption}</p>
        </div>
    );
};

export default Result;