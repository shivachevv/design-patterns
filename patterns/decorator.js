const promptQuestion = require('../helpers/promptQuestion');

class Player {
  constructor() {
    this.goalMultiplier = 1;
    this.assistMultiplier = 1;
  }

  calculatePoints({ goals, assists }) {
    return (
      Number(goals) * this.goalMultiplier +
      Number(assists) * this.assistMultiplier
    );
  }
}

class Goalkeeper {
  constructor(player) {
    this.player = player;

    this.player.goalMultiplier = 10;
    this.player.assistMultiplier = 8;
  }
  calculatePoints(stats) {
    return this.player.calculatePoints(stats);
  }
}
class Defender {
  constructor(player) {
    this.player = player;

    this.player.goalMultiplier = 8;
    this.player.assistMultiplier = 6;
  }
  calculatePoints(stats) {
    return this.player.calculatePoints(stats);
  }
}
class Midfielder {
  constructor(player) {
    this.player = player;

    this.player.goalMultiplier = 6;
    this.player.assistMultiplier = 4;
  }
  calculatePoints(stats) {
    return this.player.calculatePoints(stats);
  }
}

class Striker {
  constructor(player) {
    this.player = player;

    this.player.goalMultiplier = 4;
    this.player.assistMultiplier = 2;
  }
  calculatePoints(stats) {
    return this.player.calculatePoints(stats);
  }
}

const positions = {
  gk: Goalkeeper,
  def: Defender,
  mid: Midfielder,
  st: Striker,
};

const statsHandler = (readline) => (payload) => {
  const position = payload.split(',')[0]?.trim();
  const goals = payload.split(',')[1]?.trim();
  const assists = payload.split(',')[2]?.trim();

  if (
    !goals ||
    !assists ||
    !position ||
    !Object.keys(positions).includes(position)
  ) {
    console.log('Incorrect stats!');
    return decoratorHandler(readline);
  }

  const statsPayload = {
    goals,
    assists,
  };

  const playerInstance = new Player();

  const player = new positions[position](playerInstance);

  console.log(`Total points: ${player.calculatePoints(statsPayload)}`);
};

const decoratorHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose position and stats (gk|def|mid|st, goals, assists) comma separated!: ',
    statsHandler(readline)
  );
};

module.exports = decoratorHandler;
