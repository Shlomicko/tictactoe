import React from 'react';
import App from '../App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GameManager from '../game/GameManager';

const game = new GameManager();

export default () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" render={route => {
            return <App {...route} game={game} />;
          }}
        />
      </div>
    </Router>
  );
}
