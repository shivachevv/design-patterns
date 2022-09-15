const promptQuestion = require('../helpers/promptQuestion');

class PlayersIterator {
  index = 0;
  constructor(playersInstance) {
    this.playersInstance = playersInstance;
  }
  isDone() {
    return this.index >= this.playersInstance.players.length;
  }

  currentPlayer() {
    return this.playersInstance.players[this.index];
  }

  nextPlayer() {
    this.index++;
  }

  iterate(callback) {
    while (!this.isDone()) {
      callback(this.currentPlayer());
      this.nextPlayer();
    }
  }
}

class Players {
  constructor(players) {
    this.players = players;
  }

  getIterator() {
    return new PlayersIterator(this);
  }
}

const handler = () => {
  const players = new Players(['player1', 'player2', 'player3']);

  const playerIterator = players.getIterator();

  playerIterator.iterate(console.log);
};

const iteratorHandler = (readline) => {
  promptQuestion(
    readline,
    'Iterate through the players using the iterator pattern',
    handler
  );
};

module.exports = iteratorHandler;
