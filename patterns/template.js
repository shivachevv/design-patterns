const promptQuestion = require('../helpers/promptQuestion');

class FBApi {
  post() {
    console.log('FB api post');
  }
  delete() {
    console.log('FB api delete');
  }
  edit() {
    console.log('FB api edit');
  }
}
class TwitterApi {
  post() {
    console.log('Twitter api post');
  }
  delete() {
    console.log('Twitter api delete');
  }
  edit() {
    console.log('Twitter api edit');
  }
}

class PostToSocialMedia {
  api;
  constructor(api) {
    this.api = api;
  }
  createPost(user) {
    this.api.post();
    return console.log(`${user.name} created a post!`);
  }
  deletePost(id, user) {
    this.api.delete();
    return console.log(`Post with id: ${id} was deleted by ${user.name}!`);
  }
  editPost(id, user) {
    this.api.edit();
    return console.log(`Post with id: ${id} was edited by ${user.name}!`);
  }
}

class PostToFB extends PostToSocialMedia {
  constructor(api) {
    super(api);
  }

  likePost(id, user) {
    return console.log(`Post with id: ${id} was liked by ${user.name}!`);
  }
}

const postHandler = (readline) => (input) => {
  if (!input || !['fb', 'twitter'].includes(input)) {
    console.log('Incorrect input!');
    return templateHandler(readline);
  }

  const apiMap = {
    fb: () => new FBApi(),
    twitter: () => new TwitterApi(),
  };

  const poster = new PostToFB(apiMap[input]());
  poster.createPost({ name: 'gosho' });
  poster.likePost(1, { name: 'pesho' });
};

const templateHandler = (readline) => {
  promptQuestion(
    readline,
    'Choose a social media (fb|twitter): ',
    postHandler(readline)
  );
};

module.exports = templateHandler;
