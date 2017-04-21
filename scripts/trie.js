import Node from './node.js';
require('locus')

export default class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.nodeCount = 0;
    this.preSort = [];
    this.sortedSuggest = [];
  };

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    });
  };

  insert(word) {
    let curNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if (!curNode.children[letter]) {
        curNode.children[letter] = new Node(letter);
        this.nodeCount++;
      };

      curNode = curNode.children[letter];
    };

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

    if (curNode.isWord) {
      this.select(curNode)
    };

    return this.findWord(curNode, userInput);
  };

  select(curNode) {
    curNode.isAccessed++
  }

  findWord(curNode, word) {
    let keys = Object.keys(curNode.children);

    if (curNode.isWord) {
      this.preSort.push( {isAccessed: curNode.isAccessed, word} );

      return this.sortedPossible(this.preSort);
    };

    for (let i = 0; i < keys.length; i++) {
      let node = curNode.children[keys[i]];
      this.findWord(node, word + keys[i]);
    };
  };

  sortedPossible(preSort) {
    preSort.sort( (a, b) => {
      return b.isAccessed - a.isAccessed;
    });

    this.sortedSuggest = preSort.map( (obj) => {
      return obj.word;
    });

    return this.sortedSuggest;
  };
};
