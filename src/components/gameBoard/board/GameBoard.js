import React from "react";
import { Square } from "./Square";
import "./board.css";
import Conffeti from "../../effects/confetti";
import Tie from "../../effects/Tie";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.squares = Array(9).fill(0, 0, 9);
  }

  createSquares() {
    return this.squares.map((square, index) => {
      const { wonSquares, occupideSquares, onSquareClicked } = this.props;
      return (
        <Square
          index={index}
          key={index}
          winner={wonSquares.includes(index)}
          occupadoByPlayer={occupideSquares.get(index)}
          onSquareClick={onSquareClicked}
        />
      );
    });
  }

  render() {
    const { gameEnded, hasWinner } = this.props;
    return (
      <div className="board-wrppaer">
        <div className={`board${gameEnded ? " gameOver" : ""}`}>
          {this.createSquares()}
        </div>
        {gameEnded && hasWinner ? <Conffeti /> : null}
        {gameEnded && !hasWinner ? <Tie /> : null}
      </div>
    );
  }
}

export default GameBoard;
