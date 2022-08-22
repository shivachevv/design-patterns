const promptQuestion = require('../helpers/promptQuestion');

class CreateJohn {
  sing() {
    console.log(
      'For the benefit of mr Kite there will be a show tonight on trampoline! ...'
    );
  }
}
class CreatePaul {
  sing() {
    console.log(
      "He likes to keep his fire engine clean. It's a clean machine! ..."
    );
  }
}
class CreateGeorge {
  sing() {
    console.log("You stick around, now it may show, I don't know! ...");
  }
}

class CreateRingo {
  sing() {
    console.log(
      'And our friends are all aboard. Many more of them live next door! ...'
    );
  }
}

const beatlesMap = {
  john: CreateJohn,
  paul: CreatePaul,
  george: CreateGeorge,
  ringo: CreateRingo,
};

class BeatlesFactory {
  createBeatle(beatleName) {
    return new beatlesMap[beatleName]();
  }
}

const beatlesHandler = (readline) => (beatleName) => {
  if (!beatleName || !Object.keys(beatlesMap).includes(beatleName)) {
    console.log('Incorrect name!');
    return factoryHandler(readline);
  }

  const factory = new BeatlesFactory();

  const beatleInstance = factory.createBeatle(beatleName);

  return beatleInstance.sing();
};

const factoryHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose a beatle to create(john|paul|george|ringo) and make him sing for free: ',
    beatlesHandler(readline)
  );
};

module.exports = factoryHandler;
