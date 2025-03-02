import React from 'react';
import Board from './Board';
import '../App.css';

const Container = () => {
    return (
        <div className='cont-container'> 
            <h1>Rock Paper Scissors Game</h1>
            <Board />
        </div>
    );
};

export default Container;