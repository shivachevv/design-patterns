const promptQuestion = require('../helpers/promptQuestion');

class Comment {
  constructor({ user, content }) {
    this.user = user;
    this.content = content;
    this.replies = [];
  }

  addReply(reply) {
    this.replies.push(reply);
  }
  removeReply(reply) {
    this.replies = this.replies.filter((r) => r.id === reply.id);
  }
  getReply(reply) {
    return this.replies.find((r) => r.id === reply.id);
  }

  traverse(indent, node) {
    console.log(
      `${'-> '.repeat(indent++)} ${node.content} : by ${node.user.name}`
    );
    node.replies.forEach((reply) => {
      this.traverse(indent, reply);
    });
  }
}

const commentHandler = (input) => {
  const pesho = { id: 1, name: 'pesho' };
  const gosho = { id: 1, name: 'gosho' };
  const kole = { id: 1, name: 'kole' };

  const peshoComment1 = new Comment({
    user: pesho,
    content: 'Kole, poluchi li?',
  });
  const koleReply1 = new Comment({ user: kole, content: 'Da brat tuka e.' });
  peshoComment1.addReply(koleReply1);

  const goshoReply1 = new Comment({
    user: gosho,
    content: 'Abe hora pratete i na men malko.',
  });
  peshoComment1.addReply(goshoReply1);

  const goshoReply2 = new Comment({
    user: gosho,
    content: 'I kak e, kole, dobro li e?.',
  });
  koleReply1.addReply(goshoReply2);

  peshoComment1.traverse(1, peshoComment1);
};

const compositeHandler = (readline) => {
  promptQuestion(
    readline,
    'Click it, save it, seed it, share it, link it, stream it, Pirate Bay... ',
    commentHandler
  );
};

module.exports = compositeHandler;
