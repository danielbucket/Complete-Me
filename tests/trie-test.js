import { expect, assert } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/Node';
require('locus');

describe('Lemme tell you about Trie', () => {

  it('1: should have a constructor function', () => {
    var trie = new Trie()

    assert.isFunction(trie.constructor)
  });

  it('2: the constructor should have the following properties', () => {
    var trie = new Trie();

    expect(trie.root).to.be.an.object;
    expect(trie.wordCount).to.deep.equal(0);
    expect(trie.nodeCount).to.deep.equal(0);
    expect(trie.prelimPossible).to.be.an('array')
  });

  it('3: insert should be a function', () => {
    var trie = new Trie();

    assert.isFunction(trie.insert);
  });

  it('4: should have a function to pass in large libraries', () => {
    var trie = new Trie();

    assert.isFunction(trie.populate)
  });

  it('5: should have an insert function', () => {
    var trie = new Trie();

    assert.isFunction(trie.insert);
  });

  it('6: should increase the word count every time a new word is passed in', () => {
    var trie = new Trie();

    expect(trie.wordCount).to.deep.equal(0);

    trie.insert('panty');

    expect(trie.wordCount).to.deep.equal(1);

    trie.insert('friend');
    trie.insert('snoot');
    trie.insert('savage');
    trie.insert('credential');
    trie.insert('callous');

    expect(trie.wordCount).to.deep.equal(6);
  });

  it('7: should have a suggest function', () => {
    var trie = new Trie();

    assert.isFunction(trie.suggest);
  });

  it('8: should have a findWord function', () => {
    var trie = new Trie();

    assert.isFunction(trie.findWord);
  });

  it.skip('9: should be able to increase the wordCount property', () => {
    var trie = new Trie();

    trie.insert('bellow')

    expect(trie.insert).to.increase(trie.nodeCount);
  });

  it('10: should increase the nodeCount accordingly for every letter of every word passed in', () => {
    var trie = new Trie();

    trie.insert('fishery');
    trie.insert('berrylium');
    trie.insert('satisfaction')


    expect(trie.nodeCount).to.deep.equal(28)
  });

  it('11: should return an array of preffered suggestions', () => {
    var trie = new Trie()

    trie.insert('panty')
    trie.insert('poop');
    trie.insert('plow');
    trie.insert('pint');
    trie.suggest('p');

    expect(trie.prelimPossible).to.have.lengthOf(4)
    expect(trie.newPossible).to.deep.equal(['panty','poop', 'plow', 'pint']);
    expect(trie.wordCount).to.equal(4);
  });

  it('12: should be able to engulf an entire dictionary in one gulp', () => {
    var trie = new Trie();

    trie.populate();

    expect(trie.wordCount).to.deep.equal(235886);
    expect(trie.nodeCount).to.deep.equal(792776);
  });
});
