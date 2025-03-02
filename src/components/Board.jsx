function Board() {
    return <h2>I am a Board!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Board />
      </>
    );
  }

  export default Board;