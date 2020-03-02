import React from 'react';
import './Game.css';
import GameBoard from '../board/GameBoard';
import LeaderBoardStorage from '../../../store/LeaderBoardStorage';

class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      occupideSquares: new Map(this.props.game.getBoard()),
      winnerSquares: []
    };
    this.onSquareClicked = this.onSquareClicked.bind(this);
    this.props.game.onGameEnd = this.onGameEnd.bind(this);

    this.leaderBoardStorage = new LeaderBoardStorage();
    this.setPlayersFromParams();
  }

  onSquareClicked(index){
    this.props.game.fillSquare(index);
    this.setState({
      occupideSquares: new Map(this.props.game.getBoard())
    });
  }

  onGameEnd(winner) {
    
    const gameLeaderBoard = this.leaderBoardStorage.getData();
    if (winner) {
      this.leaderBoardStorage.update([{name:winner.player.name, winner: true}, gameLeaderBoard]);
      this.setState({
        winnerSquares: winner.squares,
        winner: true,
        gameOver: true
      });
    }else{
      this.leaderBoardStorage.update([{name:winner.player.name, winner: false}, gameLeaderBoard]);
      this.setState({
        gameOver: false
      });
    }
  }

  setPlayersFromParams(){
    const { playerOne, playerTwo } = this.props.match.params;
    this.props.game.playersManager.addPlayer(playerOne);
    this.props.game.playersManager.addPlayer(playerTwo);
  }

  render(){
    return(
      <GameBoard 
      gameEnded={ this.state.gameOver }
      onSquareClicked={ this.onSquareClicked } 
      occupideSquares={ this.state.occupideSquares }
      wonSquares={ this.state.winnerSquares }
      />
    )
  }

}

export default Game;
