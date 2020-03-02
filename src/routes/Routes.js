import React from 'react';
import LeaderBoard from '../components/leaderBoard/LeaderBoard'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GameManager from '../game/GameManager';
import Game from '../components/gameBoard/game/Game';
import StartScreen from '../StartScreen';
import FormScreen from '../components/playersInputScreen/FormScreen';

const game = new GameManager();

export default () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" render={route => {
            return <StartScreen/>;
          }}
        />
        <Route exact path="/game" render={route => {
            return <Game {...route} game={game} />;
          }}
        />
        <Route path="/leaderboard" render={route => {
            return <LeaderBoard {...route} game={game} />;
          }}
        />
        <Route path="/twoplayers" render={route => {
            return <FormScreen game={game} {...route}/>;
          }}
        />
      </div>
    </Router>
  );
}
