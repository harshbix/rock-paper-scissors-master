import React, { useState } from "react";
import Board from "./Board";
import "../App.css";
import Console from "./Console.jsx";
import Result from "./Result"; // Import Result component

const Container = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [status, setStatus] = useState(null);

  // Function to increment the score if the user wins
  const handleWin = () => {
    setScore((prevScore) => prevScore + 1);
  };

  // Function to reset the game state when the user plays again
  const handlePlayAgain = () => { 
    setSelected(null);
    setComputerSelection(null);
    setStatus(null);
  };

  return (
    <div className="cont-container">
      <h1 className="text-center p-2">Rock Paper Scissors Game</h1>
      <Board score={score} />

      {/* Render the Result component if there's a selected move */}
      {selected && (
        <Result
          selected={selected}
          computerSelection={computerSelection}
          status={status}
          onPlayAgain={handlePlayAgain}
          onWin={handleWin} // Pass handleWin as a prop
        />
      )}

      {/* Pass onPlay function to Console to handle game logic */}
      <Console
        onPlay={(userSelection, computerSelection, resultStatus) => {
          setSelected(userSelection);
          setComputerSelection(computerSelection);
          setStatus(resultStatus);

          // Increment score if the user wins
          if (resultStatus === "You Win") {
            handleWin();
          }
        }}
      />
    </div>
  );
};

export default Container;
