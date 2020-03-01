import Player from './Player';


class PlayersManager {
  players = [];
  currentPlayerIndex = 0;

  constructor(players = []) {
    this.createPlayers(players);
  }

  addPlayer(playerName) {
    if (!playerName) {
      throw Error('Player name missing');
    }
    const player = {
      name: playerName,
      id: this.players.length + 1,
      class: 'player' + this.players.length + 1
    };
    this.players.push(new Player(player));
  }

  createPlayers(players) {
    this.players = players.map(player => {
      return new Player(player);
    });
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  getPlayers() {
    return [...this.players];
  }

  nextPlayerTurn() {
    let currentPlayerIndex = this.currentPlayerIndex;
    currentPlayerIndex++;

    if (currentPlayerIndex >= this.players.length) {
      currentPlayerIndex = 0;
    }

    return this.switchPlayer(currentPlayerIndex);
  }

  switchPlayer(index) {
    this.currentPlayerIndex = index;
    return this.players[index];
  }

}

export default PlayersManager;
