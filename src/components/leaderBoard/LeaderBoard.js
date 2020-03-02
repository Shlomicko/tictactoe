import React, { Component } from "react";
import "./leader-board.css";
import LeaderBoardStorage from "../../store/LeaderBoardStorage";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let storage = new LeaderBoardStorage().getData();
    this.setState({
      leaderBoard: storage
    });
  }

  renderWinnerMessage() {
    return (
      <div>
        <p>
          Leadr Board
        </p>

        <p>
          Are you ready to{" "}
          <button className="action-button" type="button" onClick={this.props.history.goBack}>
            play again
          </button>{" "}
        </p>
      </div>
    );
  }

  render() {
    const {leaderBoard} = this.state;
    
    return (
      <div className="leader-board">
        <h1>Leaderboard</h1>
        {this.renderWinnerMessage()}
        <ul>
          {leaderBoard.map((leader, key) => {
            return <li key={key}>{leader.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default LeaderBoard;
