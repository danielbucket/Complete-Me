import Node from './node.js';

const text = "/usr/share/dict/words";
let fs = require('fs');
let dictionary = fs.readFileSync(text).toString().trim().split('\n')



export default class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.nodeCount = 0;
    this.prelimPossible = [];
    this.commonWords = [];
  };

  populate() {
    dictionary.forEach( word => {
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
    return this.findWord(curNode, userInput);
  };

  findWord(curNode, word, array) {

    let keys = Object.keys(curNode.children);

    if (curNode.isWord) {
      // curNode.isAccessed++;
      this.prelimPossible.push({isAccessed: curNode.isAccessed, word});
      return this.sortedPossible(this.prelimPossible)
    };

    for (let i = 0; i < keys.length; i++) {
      let node = curNode.children[keys[i]];
      this.findWord(node, word + keys[i]);
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