export default class Node {

  constructor(word) {
    this.word = word;
    this.children = {};
    this.isWord = false;
    this.isAccessed = 0;
  };
};
