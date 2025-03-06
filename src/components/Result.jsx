import React, { useEffect } from "react";

const Result = ({ selected, computerSelection, status, onPlayAgain, onWin }) => {
  const source = "../../images/";

  useEffect(() => {
    if (status === "You Win") {
      onWin(); // Increment the score when the user wins
    }
  }, [status, onWin]);

  return (
    <div className="result-container">
      <div className="result">
        {/* Player's choice */}
        <div className={`console-button ${selected}`}>
          <img src={`${source}icon-${selected}.svg`} alt={selected} />
        </div>

        {/* Status and Play Again button in the center */}
        <div className="result-middle">
          <div className="result-status">{status}</div>
          <button className="play-again" onClick={onPlayAgain}>
            PLAY AGAIN
          </button>
        </div>

        {/* Computer's choice */}
        <div className={`console-button ${computerSelection}`}>
          <img src={`${source}icon-${computerSelection}.svg`} alt={computerSelection} />
        </div>
      </div>
    </div>
  );
};

export default Result;

