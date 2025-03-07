import React, { useState } from "react";
import "../App.css";
import Result from "./Result";

const Console = ({ onSelection }) => {
  const [selected, setSelected] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [status, setStatus] = useState("");
  const [showResult, setShowResult] = useState(false);

  const source = "../../images/";
  const images = ["icon-paper.svg", "icon-rock.svg", "icon-scissors.svg"];
  const choices = ["paper", "rock", "scissors"];

  const getComputerChoice = (userChoice) => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    // Reduce draws: If the computer initially picks the same as the user, re-pick with 50% probability
    if (randomChoice === userChoice && Math.random() < 0.5) {
      const filteredChoices = choices.filter(choice => choice !== userChoice);
      randomChoice = filteredChoices[Math.floor(Math.random() * filteredChoices.length)];
    }

    return randomChoice;
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "DRAW";
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "YOU WON!!";
    }
    return "YOU LOSE!!";
  };

  const handleClick = (value) => {
    const computerChoice = getComputerChoice(value);
    setSelected(value);
    setComputerSelection(computerChoice);
    setStatus(getResult(value, computerChoice));
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
      {!showResult ? (
        <div className="console">
          {images.map((image, index) => {
            const value = image.split("-")[1].split(".")[0];
            return (
              <button key={index} className={`console-button ${value}`} onClick={() => handleClick(value)}>
                <img src={`${source}${image}`} alt={value} />
              </button>
            );
          })}
        </div>
      ) : (
        <Result selected={selected} computerSelection={computerSelection} status={status} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  );
};

export default Console;
