import React from "react";
import "./board.css";

export const Square = props => {
  let spotTaken = "";
  const { occupadoByPlayer, index, winner } = props;
  if (occupadoByPlayer) {
    spotTaken += `taken player${occupadoByPlayer}-avatar`;
  }

  if (winner) {
    spotTaken += " won";
  }
  console.log(props);
  return (
    <div
      id={`square_${index}`}
      className={`square ${spotTaken}`}
      onClick={() => props.onSquareClick(index)}
    />
  );
};
