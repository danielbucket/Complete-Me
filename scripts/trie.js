import Node from './node.js';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.nodeCount = 0;
    this.prelimPossible = [];
    this.commonWords = [];
  };

  populate(input) {
    input.forEach( word => {
      this.insert(word)
    });
  };

  insert(word) {
    let curNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if (!curNode.children[letter]) {
        curNode.children[letter] = new Node(letter);
        this.nodeCount++
      };

      curNode = curNode.children[letter];
    }

    curNode.isWord = true;
    this.wordCount++;
  };

  suggest(userInput) {
    let curNode = this.root;

    for (let i = 0; i < userInput.length; i++) {
      let letter = userInput.charAt(i);

      if (curNode.children[letter]) {
        curNode = curNode.children[letter];
      };

    };
    return this.searchForWord(curNode, userInput);
  };

  searchForWord(curNode, word, array) {

    let keys = Object.keys(curNode.children);

    if (curNode.isWord) {
      this.prelimPossible.push({isAccessed: curNode.isAccessed, word});
      return this.sortedPossible(this.prelimPossible)
    };

    for (let i = 0; i < keys.length; i++) {
      let node = curNode.children[keys[i]];
      this.searchForWord(node, word + keys[i]);
    };

  };

  sortedPossible(prelimPossible) {

    prelimPossible.sort( (a, b) => {
      return b.isAccessed - a.isAccessed
    });

    this.newPossible = prelimPossible.map( (obj) => {
      return obj.word;
    });

    return this.newPossible;
  };
};
