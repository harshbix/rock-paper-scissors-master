import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Board() {
  return (
    <>
      <div className="board-container board-2 p-3">
        <div className="items">
         <span>ROCK</span> 
        <span>PAPER</span>  
          <span>SCISSORS</span>  
        </div>
      <div className="score bg-light">
        <span>SCORE</span>
        <h1>12</h1>
      </div>
      </div>
    </>
  );
}

export default Board;
