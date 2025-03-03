import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Board() {
  const score = 17;
  return (
    <>
      <div className="board-container p-3">
        <div className="items">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
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
