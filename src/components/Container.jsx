import React, { useState } from 'react';
import Board from './Board';
import '../App.css';
import Console from './console';

const Container = () => {
    const [score, setScore] = useState(0);

    const handleWin = () => {
        setScore((prevScore) => prevScore + 1);
    };

    return (
        <div className='cont-container'> 
            <h1 className='text-center p-2'>Rock Paper Scissors Game</h1>
            <Board score={score} />
            <Console onWin={handleWin} />
        </div>
    );
};

export default Container;
