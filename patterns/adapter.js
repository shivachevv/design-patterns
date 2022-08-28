const promptQuestion = require('../helpers/promptQuestion');

class OldLoginProcess {
  login({ username, password }) {
    if (!username || !password) {
      return 'Try again.';
    }

    const user = this.checkCredentials({ username, password });

    return user;
  }

  checkCredentials({ username, password }) {
    return { username, email: 'email@email.bg', age: 35 };
  }
}

class NewLoginProcess {
  constructor({ strategy }) {
    this.strategy = strategy;
    this.strategyMap = { email: this.emailLogin, google: this.googleLogin };
  }

  initiateLogin({ email, password }) {
    return this.strategyMap[this.strategy]({ email, password });
  }

  emailLogin({ email, password }) {
    if (!email || !password) {
      return 'Try again.';
    }

    const loginResult = NewLoginProcess.checkCredentials({ email, password });

    return loginResult;
  }

  static checkCredentials({ email, password }) {
    return {
      user: { email, username: 'userName1', age: 35 },
      accessToken: 'token1',
      refreshToken: 'token2',
    };
  }

  static getGoogleLoginResult(email) {
    return {
      user: { email, username: 'userName1', age: 35 },
      accessToken: 'token1',
      refreshToken: 'token2',
    };
  }

  googleLogin({ email }) {
    if (!email) {
      return 'Try again.';
    }

    const googleResult = NewLoginProcess.getGoogleLoginResult(email);
    return googleResult;
  }
}

class LoginAdapter {
  constructor(strategy) {
    this.newLogin = new NewLoginProcess({ strategy });
  }

  login({ email, password }) {
    const { user } = this.newLogin.initiateLogin({ email, password });

    return user;
  }
}

const loginHandler = (readline) => (details) => {
  const [strategy, email, password] = details.split(',');

  if (
    !strategy ||
    !['email', 'google'].includes(strategy) ||
    !email ||
    !password ||
    details.split(',').length > 3
  ) {
    console.log('Try again!');
    return adapterHandler(readline);
  }

  const oldLoginInstance = new OldLoginProcess();
  const newLoginInstance = new LoginAdapter(strategy);

  const newUser = newLoginInstance.login({ email, password });
  const oldUser = oldLoginInstance.login({
    username: 'test_username',
    password,
  });

  console.log(newUser, oldUser);
};

const adapterHandler = (readline) => {
  promptQuestion(
    readline,
    'Please choose a login strategy(email|google) and provide email and password. (strategy, email, password)',
    loginHandler(readline)
  );
};

module.exports = adapterHandler;
