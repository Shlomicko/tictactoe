import PlayersManager from "./PlayerManager";
import Player from "./Player";

class GameManager {

  constructor(playerOneName = "Shlomi", playerTwoName = "Offer", onGameEnd) {
    this.playersManager = new PlayersManager();
    this.board = new Map();
    this.onGameEnd = onGameEnd;
    this.playersManager.addPlayer(new Player(playerOneName));
    this.playersManager.addPlayer(new Player(playerTwoName));
  }

  checkSquares(slots, playerId) {
    if (slots.length < 3) {
      return;
    }

    if (
      this.checkSlot(slots[0], playerId) &&
      this.checkSlot(slots[1], playerId) &&
      this.checkSlot(slots[2], playerId)
    ) {
      return slots;
    }
  }

  checkColumns(playerId) {
    return (
      this.checkSlots([0, 3, 6], playerId) ||
      this.checkSlots([1, 4, 7], playerId) ||
      this.checkSlots([2, 5, 8], playerId)
    );
  }

  checkDiagonalUpLeft(playerId) {
    return this.checkSlots([0, 4, 8], playerId);
  }

  checkDiagonalUpRight(playerId) {
    return this.checkSlots([2, 4, 6], playerId);
  }

  checkLines(playerId) {
    return (
      this.checkSlots([0, 1, 2], playerId) ||
      this.checkSlots([3, 4, 5], playerId) ||
      this.checkSlots([6, 7, 8], playerId)
    );
  }

  checkSlots(slots, playerId) {
    if (slots.length < 3) {
      return;
    }

    if (
      this.checkSlot(slots[0], playerId) &&
      this.checkSlot(slots[1], playerId) &&
      this.checkSlot(slots[2], playerId)
    ) {
      return slots;
    }
  }

  checkSlot(index, currentPlayerId) {
    return this.board.get(index) === currentPlayerId;
  }

  onEndGame(winner) {
      return this.onGameEnd(winner);
  }

  fillSlot(index) {
    let currentPlayer = this.playersManager.getCurrentPlayer();
    if (this.board.get(index)) {
      return;
    }

    if (this.board.size < 9) {
      this.board.set(index, currentPlayer.id);
    }

    let winner = this.getWinner();

    if (winner || this.board.size === 9) {
      this.onEndGame(winner);
    } else {
      this.playersManager.nextPlayerTurn();
    }
  }

  getBoard() {
    return this.board;
  }

  clearBoard() {
    this.board.clear();
  }

  getWinner() {
    let currentPlayer = this.playersManager.getCurrentPlayer();
    let playerId = currentPlayer.id;
    let hasWinner =
      this.checkLines(playerId) ||
      this.checkColumns(playerId) ||
      this.checkDiagonalUpLeft(playerId) ||
      this.checkDiagonalUpRight(playerId);

    if (hasWinner) {
      return {
        player: currentPlayer,
        squares: hasWinner
      };
    }
  }
}

export default GameManager;
