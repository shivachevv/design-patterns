const promptQuestion = require('../helpers/promptQuestion');

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(method) {
    this.observers.push(method);
  }

  unsubscribe(method) {
    this.observers = this.observers.filter((observer) => observer !== method);
  }

  notify(changes) {
    this.observers.forEach((observer) => observer(changes));
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.notifyOnComment = this.notifyOnComment.bind(this);
  }
  notifyOnComment(comment) {
    console.log(
      `${this.name}, Someone commented this on your post: ${comment}`
    );
  }
}

const commentHandler = (comment) => {
  const postObservable = new Observable();

  const user1 = new User('Sammy');
  const user2 = new User('Dean');
  const user3 = new User('Frank');
  const usersAlreadyCommented = [user1, user2, user3];

  usersAlreadyCommented.forEach((user) =>
    postObservable.subscribe(user.notifyOnComment)
  );

  postObservable.notify(comment);
};

const observerHandler = (readline) => {
  promptQuestion(
    readline,
    'Please write a comment on this post: ',
    commentHandler
  );
};

module.exports = observerHandler;
