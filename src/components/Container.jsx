import React from 'react';
import Board from './Board';
import '../App.css';
import Console from './console';

const Container = () => {
    return (
        <div className='cont-container'> 
         <h1 className='text-center p-2'>Rock Paper Scissors Game</h1>
            <Board />
            <Console />
        </div>
    );
};

export default Container;