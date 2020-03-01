import React from 'react';
import './App.css';
import GameBoard from './components/gameBoard/board/GameBoard';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      occupideSquares: new Map(this.props.game.getBoard()),
      winnerSquares: []
    };
    this.onSquareClicked = this.onSquareClicked.bind(this);
    this.props.game.onGameEnd = this.onGameEnd.bind(this);
  }

  onSquareClicked(index){
    this.props.game.fillSlot(index);
    this.setState({
      occupideSquares: new Map(this.props.game.getBoard())
    });
  }

  onGameEnd(winner) {
    console.log(winner);
    if (winner) {
      this.setState({
        winnerSquares: winner.squares,
        winner
      });
    }
  }

  render(){
    return(
      <GameBoard 
      onSquareClicked={ this.onSquareClicked } 
      occupideSquares={ this.state.occupideSquares }
      wonSquares={ this.state.winnerSquares }
      />
    )
  }

}

export default App;
