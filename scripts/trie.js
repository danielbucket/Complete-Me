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
    };

    curNode.isWord = true;
    this.wordCount++;
  };

// the enter key is hit and this happens
  findWord(userInput) {
    // console.log(userInput);
    let curNode = this.root;

    for (let i = 0; i < userInput.length; i++) {
      let letter = userInput.charAt(i);

      if (curNode.children[letter]) {
        curNode = curNode.children[letter];
      };
    };

    // important //
    if (curNode.isWord) {
      curNode.isAccessed++
      this.presentSuggestionArray(userInput)
    }
    console.log(userInput);
    // userInput here properly represents the actual input
    return this.searchForWord(curNode, userInput);
  };

  presentSuggestionArray(userInput) {
    // if the string of text input by user does not have a final children with isWord value of true...
    // console.log('You entered "' + userInput + '"');
    // console.log('Did you mean any of these? : "' + console.log(this.prelimPossible) + '"')
    // upon implementation into an app, this console.log would be replaced with an alert that displays an array of the most likely words to choose from.
    let suggestionPresentation = { input:       'userInput',
                                   suggestions: 'this.newPossible' }
    return suggestionPresentation;
  };

// word no longer accurately represents the userInput. WTF?
  searchForWord(curNode, word, array) {
    console.log(word);
    let keys = Object.keys(curNode.children);


    if (curNode.isWord) {
      // this is not a good place to increment isAccessed. If I did that here the result would be more like 'the most searched for word ever', or 'the mostly likely word youre looking for. Not to how often a specific word has been accessed.
      // if I did do that here than I could implement a spelling checker based on the most commonly used string of letters typed in the input. I'd have to check for when a user corrects for misspelled words by backspacing. ie, if the previous node it was on before the backspace is equal to a child of the current node, than decrement the wasTyped property.
      // it would be really interesting in the long run to see what kind the most commonly searched string of letters was. Would have to implement it on a pretty large scale to get the best results. Maybe I could break it down in different ways. Like the most commonly searched string of letter by state. Or by zipCode, timeZone, country, elevation, city, or median household income or any other kind of publicly available source of that sort. Than I could display is in various and interesting ways, like heatMaps or something.

      // need to keep multiple copies of a word out of prelimPossible
      // console.log(word);
      this.prelimPossible.push({ isAccessed: curNode.isAccessed, word });
      // console.log(this.prelimPossible);
      return this.sortedPossible(this.prelimPossible, curNode);
    };

    for (let i = 0; i < keys.length; i++) {
      let node = curNode.children[keys[i]];
      this.searchForWord(node, word + keys[i]);
    };

  };

  sortedPossible(prelimPossible, curNode) {
    // console.log('before', prelimPossible);
    prelimPossible.sort( (a, b) => {
      // console.log('after', prelimPossible);
      return b.isAccessed - a.isAccessed
    });
    // console.log('inside', prelimPossible);

    // this could be a forEach()
    this.newPossible = prelimPossible.map( (obj) => {
      return obj.word;
    });
    return this.newPossible;
  };
// what detirmines of a word has been chosen?
// someone hits the enter button.
// i was under the assumption that the array would be updated on each keystroke.
};
