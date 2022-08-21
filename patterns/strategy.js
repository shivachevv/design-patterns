const promptQuestion = require('../helpers/promptQuestion');

class StrategyManager {
  constructor() {
    this._strategy = null;
  }

  set strategy(strategy) {
    return (this._strategy = strategy);
  }

  get strategy() {
    return this._strategy;
  }

  action() {
    return this._strategy.action();
  }
}

class GoogleAuthStrategy {
  action() {
    console.log('You have signed in with your Google Account');
  }
}
class EmailAuthStrategy {
  action() {
    console.log('You have signed in with your email');
  }
}
class FacebookAuthStrategy {
  action() {
    console.log('You have signed in with your Facebook Account');
  }
}

const questionHandler = (readline) => (strategy) => {
  if (!['google', 'fb', 'email'].includes(strategy)) {
    console.log('Incorrect strategy, try again.');
    return strategyHandler(readline);
  }
  const strategyManager = new StrategyManager();
  if (strategy === 'google') {
    const google = new GoogleAuthStrategy();
    strategyManager.strategy = google;
    strategyManager.action();
  }
  if (strategy === 'fb') {
    const facebook = new FacebookAuthStrategy();
    strategyManager.strategy = facebook;
    strategyManager.action();
  }
  if (strategy === 'email') {
    const email = new EmailAuthStrategy();
    strategyManager.strategy = email;
    strategyManager.action();
  }
};

const strategyHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose sign in strategy (google, fb, email): ',
    questionHandler(readline)
  );
};

module.exports = strategyHandler;
