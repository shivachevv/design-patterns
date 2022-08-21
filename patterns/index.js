const patternsMap = require('../helpers/patternsMap');

module.exports = class Patterns {
  static execute(patternCode, readline) {
    return patternsMap[patternCode - 1].handler(readline);
  }

  static printPatterns() {
    return patternsMap.reduce((string, { name }, index) => {
      string += `${index + 1}: ${name}\n`;
      return string;
    }, '');
  }
};
