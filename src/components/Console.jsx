import React, { useState } from "react";
import "../App.css";

const Console = ({ onSelection }) => {
  const [selected, setSelected] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [status, setStatus] = useState("");
  const [showResult, setShowResult] = useState(false);

  const source = "../../images/";
  const images = ["icon-paper.svg", "icon-rock.svg", "icon-scissors.svg"];
  const choices = ["paper", "rock", "scissors"];

  const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "DRAW";
    }
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "YOU WON";
    }
    return "YOU LOSE";
  };

  const handleClick = (value) => {
    const computerChoice = getComputerChoice();
    const result = getResult(value, computerChoice);

    setSelected(value);
    setComputerSelection(computerChoice);
    setStatus(result);
    setShowResult(true);

    onSelection(value);
  };

  const handlePlayAgain = () => {
    setSelected(null);
    setComputerSelection(null);
    setStatus("");
    setShowResult(false);
  };

  return (
    <div className="console-container">
      <div className="console">
        {!showResult ? (
          <div className="console-body">
            {images.map((image, index) => {
              const value = image.split("-")[1].split(".")[0];
              return (
                <button
                  key={index}
                  className={`console-button ${value}`}
                  onClick={() => handleClick(value)}
                >
                  <img src={`${source}${image}`} alt={value} />
                </button>
              );
            })}
          </div>
        ) : (
          <div className="result-container">
            <div className="result">
              <div className="result-item">
                <div
                  className={`console-button ${selected} ${selected}-selected`}
                >
                  <img src={`${source}icon-${selected}.svg`} alt={selected} />
                </div>
                <div className="result-item">
                  <div className="result-status">{status}</div>
                  <button className="play-again" onClick={handlePlayAgain}>
                    PLAY AGAIN
                  </button>
                </div>
                <div className={`console-button ${computerSelection}`}>
                  <img
                    src={`${source}icon-${computerSelection}.svg`}
                    alt={computerSelection}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Console;
