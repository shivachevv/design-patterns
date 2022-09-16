const promptQuestion = require('../helpers/promptQuestion');

class RobotFactory {
  models = { s3: RoborockS3, s5: RoborockS5, s7: RoborockS7 };

  // constructor() {
  //   this.buyRobot = this.buyRobot.bind(this);
  // }
  buyRobot(model) {
    if (!this.models[model]) {
      return new NullRoborock();
    }

    return new this.models[model]();
  }
}

class RoborockS3 {
  speed = 200;
  clean() {
    console.log(
      `You are cleaning with the Roborock S3 with ${this.speed} RPM!`
    );
  }
}

class RoborockS5 {
  speed = 500;
  clean() {
    console.log(
      `You are cleaning with the Roborock S5 with ${this.speed} RPM!`
    );
  }
}

class RoborockS7 {
  speed = 1000;
  clean() {
    console.log(
      `You are cleaning with the Roborock S7 with ${this.speed} RPM!`
    );
  }
}

class NullRoborock {
  speed = null;
  clean() {
    console.log(`No robot, no clean!`);
  }
}

const handler = (model) => {
  const roborockFactory = new RobotFactory();
  const robot = roborockFactory.buyRobot(model);

  robot.clean();
};

const nullObjectHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose a Roborock model to clean your house!(s3|s5|s7)',
    handler
  );
};

module.exports = nullObjectHandler;
