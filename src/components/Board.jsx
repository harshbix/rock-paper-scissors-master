import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Board({ score }) {
  const items = ["ROCK", "PAPER", "SCISSORS"];

  return (
    <>
      <div className="board-container p-3">
        <div className="items">
          <span>{items[0]}</span>
          <span>{items[1]}</span>
          <span>{items[2]}</span>
        </div>
        <div className="all">
          <div className="score">
            <span>SCORE</span>
            <div className="no">{score}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
