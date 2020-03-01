import React from "react";
import "./board.css";

export const Square = props => {
  let spotTaken = "";

  if (props.occupadoByPlayer) {
    spotTaken += `taken player${props.occupadoByPlayer}`;
  }

  if (props.winner) {
    spotTaken += " won";
  }
  console.log(props);
  return (
    <div
      id={`square_${props.index}`}
      className={`square ${spotTaken}`}
      onClick={() => props.onSquareClick(props.index)}
    />
  );
};
