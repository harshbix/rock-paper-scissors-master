import React from "react";

const Result = ({ selected, computerSelection, status, onPlayAgain }) => {
  const source = "../../images/";

  return (
    <div className="result-container">
      <div className="result">
        <div className="result-item">
          <div className={`console-button ${selected}`}>
            <img src={`${source}icon-${selected}.svg`} alt={selected} />
          </div>
          <div className="result-status">{status}</div>
          <button className="play-again" onClick={onPlayAgain}>
            PLAY AGAIN
          </button>
          <div className={`console-button ${computerSelection}`}>
            <img src={`${source}icon-${computerSelection}.svg`} alt={computerSelection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
