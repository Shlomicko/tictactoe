import React from 'react'
import { Square } from './Square';
import './board.css';

class GameBoard extends React.Component{
    
    constructor(props){
        super(props);
        this.squares = Array(9).fill(0, 0, 9);
    }

    createSquares() {
        return this.squares.map((square, index) => {
          return (<Square index={index} 
            key={index} 
            winner={this.props.wonSquares.includes(index)}
            occupadoByPlayer={this.props.occupideSquares.get(index)}
            onSquareClick={this.props.onSquareClicked}/>);
        });
      }

    render(){
        return(
            <div className="board">
                {this.createSquares()}
            </div>
        );
    }
}

export default GameBoard;