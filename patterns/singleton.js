const promptQuestion = require('../helpers/promptQuestion');

let dough = 1000;

class Singleton {
  instance;
  constructor() {
    this.dough = dough;
  }

  getDb() {
    return this.dough;
  }

  add(amount) {
    this.dough += amount;
  }

  remove(amount) {
    this.dough -= amount;
  }

  createSingleInstance() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    return Singleton.instance;
  }
}

const handler = () => {
  const instance1 = new Singleton().createSingleInstance();
  const instance2 = new Singleton().createSingleInstance();

  console.log(`Instance 1 has this amount of dough ${instance1.getDb()}`);

  console.log(
    `Until suddenly it gets screwed by Instance2 which steals 500 dough!`
  );

  instance2.remove(500);

  console.log(
    `And poor Instance1 is left on the street with just ${instance1.getDb()} :/`
  );
};

const singletonHandler = (readline) => {
  promptQuestion(
    readline,
    "Let's see how Instance2 steals $$$ from Instance1...",
    handler
  );
};

module.exports = singletonHandler;
