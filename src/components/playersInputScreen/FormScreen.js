import React from "react";
import "./../../index.css";
import "./form-screen.css";

class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledClass: "",
      input1: "",
      input2: ""
    };
  }

  onInputOneChange(event) {
    this.setState({ input1: event.target.value });
  }

  onInputTwoChange(event) {
    this.setState({ input2: event.target.value });
  }

  isEnabled() {
    const { input1, input2 } = this.state;
    return !input1 || !input2 || input1 === input2;
  }

  startGame() {
    let { input1, input2 } = this.state;
    this.props.game.playersManager.addPlayer(input1);
    this.props.game.playersManager.addPlayer(input2);
    this.props.history.push(`/playerOne/${input1}/playerTwo/${input2}`);
  }

  render() {
    const disabled = this.isEnabled();

    return (
      <div className="players-details">
        <div className="player-input player1-side">
          <div className="player1-avatar"></div>
          <input
            id="input1"
            type="text"
            placeholder="Enter name"
            onChange={e => this.onInputOneChange(e)}
          ></input>
        </div>
        <button className="action-button" disabled={disabled} onClick={() => {this.startGame()}} >
          Start
        </button>
        <div className="player-input player2-side">
          <div className="player2-avatar"></div>
          <input
            id="input2"
            type="text"
            placeholder="Enter name"
            onChange={e => this.onInputTwoChange(e)}
          ></input>
        </div>
      </div>
    );
  }
}

export default FormScreen;
