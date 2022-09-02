const promptQuestion = require('../helpers/promptQuestion');

class Youtube {
  videos = [
    { id: 1, name: 'video1' },
    { id: 2, name: 'video2' },
  ];
  getVideo(id) {
    return this.videos.find((v) => v.id === id);
  }
}

class YoutubeProxy extends Youtube {
  cache = {};
  constructor(isPremium) {
    super();

    this.isPremium = isPremium;
  }

  getVideo(id) {
    if (this.isPremium === 'n') {
      console.log('Please purchase a premuim account to access videos!');
      return;
    }

    if (this.cache[id]) {
      console.log(`Now playing from cache: ${this.cache[id]?.name}`);
      return;
    }
    this.cache[id] = new Youtube().getVideo(id);
    console.log(`Now playing from call: ${this.cache[id]?.name}`);
  }
}

const youtubeHandler = (readline) => (isPremium) => {
  if (!isPremium || !['y', 'n'].includes(isPremium)) {
    console.log('Incorrect input!');
    return proxyHandler(readline);
  }

  const youtube = new YoutubeProxy(isPremium);

  youtube.getVideo(1);
  youtube.getVideo(1);
  youtube.getVideo(1);
  youtube.getVideo(2);
  youtube.getVideo(2);
};

const proxyHandler = (readline) => {
  promptQuestion(
    readline,
    'Are you PREMIUM user (y|n)?: ',
    youtubeHandler(readline)
  );
};

module.exports = proxyHandler;
