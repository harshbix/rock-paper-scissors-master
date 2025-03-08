import React, { useEffect } from "react";

const Result = ({
  selected,
  computerSelection,
  status,
  onPlayAgain,
  onWin,
}) => {
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
        <div>
          <div className={`console-button ${selected} result-button`}>
            <img src={`${source}icon-${selected}.svg`} alt={selected} />
          </div>
          <h5>YOU PICKED</h5>
        </div>

        {/* Status and Play Again button in the center */}
        <div className="result-middle">
          <div className="result-status">{status}</div>
          <button className="play-again" onClick={onPlayAgain}>
            PLAY AGAIN
          </button>
        </div>

        {/* Computer's choice */}
        <div>
          <div
            className={`console-button ${computerSelection}  result-button ${
              "result-".computerSelection
            }`}
          >
            <img
              src={`${source}icon-${computerSelection}.svg`}
              alt={computerSelection}
            />
          </div>
          <h5>THE HOUSE PICKED</h5>
        </div>
      </div>
    </div>
  );
};

export default Result;
