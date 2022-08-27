const promptQuestion = require('../helpers/promptQuestion');

class Player {
  stats = {};
  level = '';
}

class GoodGoalkeeper extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 10,
      defending: 4,
      scoring: 1,
    };
    this.level = 'good';
  }
}
class BadGoalkeeper extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 10,
      defending: 4,
      scoring: 1,
    };
    this.level = 'bad';
  }
}
class GoodDefender extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 2,
      defending: 9,
      scoring: 4,
    };
    this.level = 'good';
  }
}
class BadDefender extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 2,
      defending: 9,
      scoring: 4,
    };
    this.level = 'bad';
  }
}
class GoodMidfielder extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 1,
      defending: 6,
      scoring: 5,
    };
    this.level = 'good';
  }
}
class BadMidfielder extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 1,
      defending: 6,
      scoring: 5,
    };
    this.level = 'bad';
  }
}
class GoodStriker extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 1,
      defending: 2,
      scoring: 9,
    };
    this.level = 'good';
  }
}
class BadStriker extends Player {
  constructor() {
    super();
    this.stats = {
      goalkeeping: 1,
      defending: 2,
      scoring: 9,
    };
    this.level = 'bad';
  }
}

class GoalkeeperFactory {
  static create(level) {
    return level === 'good' ? new GoodGoalkeeper() : new BadGoalkeeper();
  }
}
class DefenderFactory {
  static create(level) {
    return level === 'good' ? new GoodDefender() : new BadDefender();
  }
}
class MidfielderFactory {
  static create(level) {
    return level === 'good' ? new GoodMidfielder() : new BadMidfielder();
  }
}
class StrikerFactory {
  static create(level) {
    return level === 'good' ? new GoodStriker() : new BadStriker();
  }
}

class AbstractFactory {
  constructor(type, level) {
    this.type = type;
    this.level = level;
  }

  createPlayer(type, level) {
    if (type === 'gk') {
      return GoalkeeperFactory.create(level);
    }
    if (type === 'def') {
      return DefenderFactory.create(level);
    }
    if (type === 'mid') {
      return MidfielderFactory.create(level);
    }
    if (type === 'st') {
      return StrikerFactory.create(level);
    }
  }
}

const playerHandler = (readline) => (details) => {
  const [type, level] = details.split(',').map((value) => value.trim());

  if (
    !type ||
    !['gk', 'def', 'mid', 'st'].includes(type) ||
    !level ||
    !['good', 'bad'].includes(level)
  ) {
    console.log('Incorrect details!');
    return abstractFactoryHandler(readline);
  }

  const factory = new AbstractFactory();

  const player = factory.createPlayer(type, level);

  return console.log(
    `You created a ${player.level} player with stats: ${player.stats}!`
  );
};

const abstractFactoryHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose a player to create(gk|def|mid|st) and his level(good|bad) and see his stats: ',
    playerHandler(readline)
  );
};

module.exports = abstractFactoryHandler;
