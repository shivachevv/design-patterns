module.exports = (readline, question, handler) => {
  readline.question(question, (response) => {
    handler(response);
  });
};
