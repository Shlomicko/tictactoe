import React from "react";
import { Link } from "react-router-dom";
import "./start-screen.css";
import "./index.css"

class StartScreen extends React.Component {
  render() {
    return (
      <div className="home-screen">
        <h1>Tic Tac Toe!</h1>
        <Link className='action-button' disabled to="/game">1 Player - soon...</Link>
        <Link className='action-button' to="/twoplayers">2 Player</Link>
      </div>
    );
  }
}

export default StartScreen;
