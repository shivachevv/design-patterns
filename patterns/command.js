const promptQuestion = require('../helpers/promptQuestion');

let board = [
  ['_', '_', '_'],
  ['X', '_', '_'],
  ['_', '_', '_'],
];

const findXPosition = () => {
  return board.reduce((position, row, index) => {
    if (row.indexOf('X') >= 0) {
      position.row = index;
      position.column = row.indexOf('X');
    }
    return position;
  }, {});
};

const printBoard = () => {
  console.log(
    board.reduce((acc, row, index) => {
      acc += row.join(' ') + '\n';
      return acc;
    }, '')
  );
};

class XMovement {
  constructor() {
    this.xCoordinates = findXPosition();
  }

  left() {
    if (this.xCoordinates.column - 1 < 0) {
      return console.log("You're off the edge of the map, mate!");
    }
    board[this.xCoordinates.row][this.xCoordinates.column] = '_';
    board[this.xCoordinates.row][this.xCoordinates.column - 1] = 'X';
  }

  right() {
    if (this.xCoordinates.column + 1 < 0) {
      return console.log("You're off the edge of the map, mate!");
    }
    board[this.xCoordinates.row][this.xCoordinates.column] = '_';
    board[this.xCoordinates.row][this.xCoordinates.column + 1] = 'X';
  }
}
class YMovement {
  constructor() {
    this.xCoordinates = findXPosition();
  }

  up() {
    if (this.xCoordinates.row + 1 < 0) {
      return console.log("You're off the edge of the map, mate!");
    }
    board[this.xCoordinates.row][this.xCoordinates.column] = '_';
    board[this.xCoordinates.row - 1][this.xCoordinates.column] = 'X';
  }

  down() {
    if (this.xCoordinates.row + 1 < 0) {
      return console.log("You're off the edge of the map, mate!");
    }
    board[this.xCoordinates.row][this.xCoordinates.column] = '_';
    board[this.xCoordinates.row + 1][this.xCoordinates.column] = 'X';
  }
}

class XCommand {
  constructor(instance) {
    this.instance = instance;
  }
  execute() {
    this.instance.right();
  }
  unExecute() {
    this.instance.left();
  }
}
class YCommand {
  constructor(instance) {
    this.instance = instance;
  }
  execute() {
    this.instance.up();
  }
  unExecute() {
    this.instance.down();
  }
}

class Mover {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  up() {
    this.y.execute();
  }
  down() {
    this.y.unExecute();
  }
  right() {
    this.x.execute();
  }
  left() {
    this.x.unExecute();
  }
}

const handler = (readline) => (command) => {
  if (!['up', 'down', 'left', 'right'].includes(command)) {
    console.log('Incorrect move!');
    return commandHandler(readline);
  }
  const xCommand = new XCommand(new XMovement());
  const yCommand = new YCommand(new YMovement());

  const mover = new Mover({ x: xCommand, y: yCommand });

  mover[command]();

  printBoard();

  commandHandler(readline);
};

const commandHandler = (readline) => {
  promptQuestion(
    readline,
    'Move the X in the X direction you want to (up|down|left|right)',
    handler(readline)
  );
};

module.exports = commandHandler;
