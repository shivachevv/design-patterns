const promptQuestion = require('../helpers/promptQuestion');

class State {
  renderHomeScreen() {}
}

class LockedState extends State {
  renderHomeScreen() {
    console.log('render wallpaper on the whole screen');
  }
}
class UnlockedState extends State {
  renderHomeScreen() {
    console.log('render home page icons');
  }
}
class InCallState extends State {
  renderHomeScreen(name) {
    console.log(`render profile image of ${name}.`);
  }
}

class MobilePhone {
  state = new LockedState();

  lock() {
    if (!(this.state instanceof LockedState)) {
      this.state = new LockedState();
    }
    this.state.renderHomeScreen();
  }

  unlock() {
    if (!(this.state instanceof UnlockedState)) {
      this.state = new UnlockedState();
    }
    this.state.renderHomeScreen();
  }

  call(name) {
    if (!(this.state instanceof InCallState)) {
      this.state = new InCallState();
    }
    this.state.renderHomeScreen(name);
  }
}

const handler = () => {
  const phone = new MobilePhone();
  phone.lock();
  phone.unlock();
  phone.call('Pesho');
};

const stateHandler = (readline) => {
  promptQuestion(readline, 'Check out my new phone!', handler);
};

module.exports = stateHandler;
