import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { checkWinner } from "./CheckWinner";
import "./TicTacToeGame.css";

function TicTacToeGame() {
  const [layout, setLayout] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    setWinner(checkWinner(layout));
  }, [layout]);

  const restartGame = () => {
    setLayout(Array(9).fill(null));
    setXisNext(true);
    setWinner(null);
  };

  const handleClick = (i) => {
    const layoutState = [...layout];
    if (winner || layoutState[i]) return;
    layoutState[i] = xIsNext ? "X" : "O";
    setLayout(layoutState);
    setXisNext(!xIsNext);
  };
  return (
    <React.Fragment>
      <Layout boxes={layout} onClick={handleClick} />
      <div>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
        {winner ? <button onClick={restartGame}>Restart</button> : ""}
      </div>
    </React.Fragment>
  );
}
export default TicTacToeGame;
