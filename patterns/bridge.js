const promptQuestion = require('../helpers/promptQuestion');

const errorMessages = {
  email: 'Please enter a valid email',
  username: 'Username should have letters or numbers or . and _',
  password:
    'Password should have minimum eight characters, at least one letter and one number',
};

class Validator {
  validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  validateUsername(username) {
    return /^[a-zA-Z0-9._]+$/.test(username);
  }

  validatePassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  }
}

class RegisterForm {
  validator;
  constructor(validator) {
    this.validator = validator;
  }

  validateEmail(email) {
    return this.validator.validateEmail(email)
      ? console.log('Success')
      : console.log(errorMessages.email);
  }
  validateUsername(username) {
    return this.validator.validateEmail(username)
      ? console.log('Success')
      : console.log(errorMessages.username);
  }
  validatePassword(password) {
    return this.validator.validatePassword(password)
      ? console.log('Success')
      : console.log(errorMessages.password);
  }
}

const validationHandler = (readline) => (data) => {
  const [type, input] = data.split(',');

  if (
    !type ||
    !['email', 'username', 'password'].includes(type.trim()) ||
    !input
  ) {
    console.log('Incorrect input!');
    return bridgeHandler(readline);
  }

  const registerForm = new RegisterForm(new Validator());

  const validationMap = {
    email: 'validateEmail',
    username: 'validateUsername',
    password: 'validatePassword',
  };

  return registerForm[validationMap[type]](input);
};

const bridgeHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose what you want to validate: \n(email|username|password,input):\n- email: Should be a valid email\n- username: Should have letters or numbers or . and _\n- password: Should have minimum eight characters, at least one letter and one number \n',
    validationHandler(readline)
  );
};

module.exports = bridgeHandler;
