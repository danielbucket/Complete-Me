import { expect, assert } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/node';

const text = "/usr/share/dict/words";
var fs = require('fs');
var dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('Lemme tell you about Trie', () => {

  it('1: should have a constructor function', () => {
    let trie = new Trie();

    assert.isFunction(trie.constructor);
  });

  it('2: the constructor should have the following properties', () => {
    let trie = new Trie();

    expect(trie.root).to.be.an.object;
    expect(trie.wordCount).to.deep.equal(0);
    expect(trie.nodeCount).to.deep.equal(0);
    expect(trie.preSort).to.be.an('array');
  });

  it('3: insert should be a function', () => {
    let trie = new Trie();

    assert.isFunction(trie.insert);
  });

  it('4: should have a function to pass in large libraries', () => {
    let trie = new Trie();

    assert.isFunction(trie.populate)
  });

  it('5: should have an insert function', () => {
    let trie = new Trie();

    assert.isFunction(trie.insert);
  });

  it('6: should increase the word count every time a new word is passed in', () => {
    let trie = new Trie();

    expect(trie.wordCount).to.deep.equal(0);

    trie.insert('pantry');

    expect(trie.wordCount).to.deep.equal(1);

    trie.insert('friend');
    trie.insert('snoot');
    trie.insert('savage');
    trie.insert('credential');
    trie.insert('callous');

    expect(trie.wordCount).to.deep.equal(6);
  });

  it('7: should have a suggest function', () => {
    let trie = new Trie();

    assert.isFunction(trie.suggest);
  });

  it('8: should have a findWord function', () => {
    let trie = new Trie();

    assert.isFunction(trie.findWord);
  });

  it('9: should increase the nodeCount accordingly for every letter of every word passed in', () => {
    let trie = new Trie();

    trie.insert('fishery');
    trie.insert('berrylium');
    trie.insert('satisfaction')


    expect(trie.nodeCount).to.deep.equal(28)
  });

  it('10: should return an array of preffered suggestions', () => {
    let trie = new Trie()

    trie.insert('paltry');
    trie.insert('plenty');
    trie.insert('poop');

    trie.suggest('p');


    expect(trie.preSort).to.have.lengthOf(3);
    expect(trie.wordCount).to.equal(3);
    expect(trie.sortedSuggest).to.deep.equal(['paltry','plenty', 'poop']);
  });

  it('11: should be able to engulf an entire dictionary in one gulp', () => {
    let trie = new Trie();

    trie.populate(dictionary);

    expect(trie.wordCount).to.deep.equal(235886);
    expect(trie.nodeCount).to.deep.equal(792776);
  });

  it('12: all nodes that dont represent the end of a word should have a property of isWord with a value of false', () => {
    var trie = new Trie();

    trie.insert('harsh');

    expect(trie.root.children
                  .h.isWord).to.equal(false)
    expect(trie.root.children
                  .h.children
                  .a.isWord).to.equal(false)
  });

  it('13: last node of a word should have an isWord property with a value of true', () => {
    var trie = new Trie();

    trie.insert('pale');

    expect(trie.root.children
                  .p.children
                  .a.children
                  .l.children
                  .e.isWord).to.equal(true);
  });

  it('14: if a user passes in a full word, the isAccesed property is by a value of one', () => {
    var trie = new Trie();

    trie.insert('blast');
    trie.insert('blue');
    trie.insert('bloated');
    trie.insert('blank');
    trie.insert('bland');

    trie.suggest('blast');
    trie.suggest('blast');
    trie.suggest('blast');

    expect(trie.root.children
                    .b.children
                    .l.children
                    .a.children
                    .s.children
                    .t.isAccessed).to.equal(3);
  });

  it('15: if a user passes in a partial word, the isAccesed property should not be increased', () => {
    var trie = new Trie();

    trie.insert('blast');
    trie.insert('blue');
    trie.insert('bloated');
    trie.insert('blank');
    trie.insert('bland');

    trie.suggest('bl');

    expect(trie.root.children
                    .b.children
                    .l.children
                    .a.children
                    .s.children
                    .t.isAccessed).to.equal(0);
  });

  it('16: if a user passes in a full word, the isAccesed property should be increased by one each time its been referenced', () => {
    var trie = new Trie();

    trie.insert('blast');

    trie.suggest('blast');

    expect(trie.root.children
                    .b.children
                    .l.children
                    .a.children
                    .s.children
                    .t.isAccessed).to.equal(1);

    trie.suggest('blast');

    expect(trie.root.children
                    .b.children
                    .l.children
                    .a.children
                    .s.children
                    .t.isAccessed).to.equal(2);
  });

  it.only('should present an array of suggested words based on their isAccessed value', () => {
    let trie = new Trie();

    trie.insert('blast');
    // manually incrementing the isAccessed value
    trie.root.children.b
             .children.l
             .children.a
             .children.s
             .children.t.isAccessed=25;

    trie.insert('blue');
    // manually incrementing the isAccessed value
    trie.root.children.b
             .children.l
             .children.u
             .children.e.isAccessed=20;

    trie.insert('blank');
    // manually incrementing the isAccessed value
    trie.root.children.b
             .children.l
             .children.a
             .children.n
             .children.k.isAccessed=30;

    trie.insert('bloated');

    trie.suggest('bl');

    expect(trie.sortedSuggest).to.deep.equal(
      ['blank', 'blast', 'blue', 'bloated']
    );
  });

  it.only('should', () => {
    let trie = new Trie();

    trie.insert('paltry');
    trie.insert('plenty');
    trie.insert('poop');

    trie.suggest('poop');

  })
});
