import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Board() {
  return (
    <>
      <div className="board-container board-2 p-4">
        <div className="items">
         <span>ROCK</span> 
        <span>PAPER</span>  
          <span>SCISSORS</span>  
        </div>
      <div className="score">
        <h4>SCORE</h4>
        <h1>12</h1>
      </div>
      </div>
    </>
  );
}

export default Board;
