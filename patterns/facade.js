const promptQuestion = require('../helpers/promptQuestion');

class Lens {
  constructor() {
    this.lenses = {
      canon: {
        wide: '30mm',
        fPoint: 'f2.8',
        price: 300,
      },
      nikon: {
        wide: '45mm',
        fPoint: 'f3.2',
        price: 280,
      },
    };
  }
  getLens(type) {
    return this.lenses[type];
  }
}

class Body {
  constructor() {
    this.bodies = {
      canon: {
        shutter: '120',
        iso: '16000',
        price: 560,
      },
      nikon: {
        shutter: '130',
        iso: '32000',
        price: 680,
      },
    };
  }
  getBody(type) {
    return this.bodies[type];
  }
}

class CameraFacade {
  getCamera(type) {
    const body = new Body().getBody(type);
    const lens = new Lens().getLens(type);

    const total = +body.price + +lens.price;

    return { lens, body, total };
  }
}

const cameraHandler = (readline) => (type) => {
  if (!type || !['canon', 'nikon'].includes(type)) {
    console.log('Incorrect type!');
    return facadeHandler(readline);
  }

  const cameraFacade = new CameraFacade();

  const camera = cameraFacade.getCamera(type);

  return console.log(camera);
};

const facadeHandler = (readline) => {
  promptQuestion(
    readline,
    "Choose a type of camera(canon|nikon) to check it's detail and price: ",
    cameraHandler(readline)
  );
};

module.exports = facadeHandler;
