const Patterns = require('./patterns');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptPattern() {
  readline.question(
    `Hello there, which pattern you would like to see:\n${Patterns.printPatterns()}`,
    (pattern) => {
      Patterns.execute(pattern, readline);
    }
  );
}

promptPattern();
