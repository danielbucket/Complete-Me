import { expect, assert } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/Node';

const fs = require('fs');
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

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

  it('7: should have a findWord function', () => {
    var trie = new Trie();

    assert.isFunction(trie.findWord);
  });

  it('8: should have a searchForWord function', () => {
    var trie = new Trie();

    assert.isFunction(trie.searchForWord);
  });

  it('9: should increase the nodeCount accordingly for every letter of every word passed in', () => {
    var trie = new Trie();

    trie.insert('fishery');
    trie.insert('berrylium');
    trie.insert('satisfaction');


    expect(trie.nodeCount).to.deep.equal(28);
  });

  it.only('10: should return an array of preffered words', () => {
    var trie = new Trie();

    trie.insert('pile');
    trie.insert('pipe');
    trie.insert('piper');
    // trie.insert('pine');
    trie.insert('pint');
    trie.insert('pinney');


    trie.findWord('pie')
    trie.findWord('pie')

    // trie.findWord('pine');
    // trie.findWord('pine');

    ///
    // console.log(trie.newPossible);

    trie.findWord('pint');
    trie.findWord('pint');
    trie.findWord('pint');

    trie.findWord('pinney');
    // trie.findWord('pinney');
    // trie.findWord('pinney');
    // trie.findWord('pinney');


    // console.log('isAccessed :', trie.root);

    expect(trie.wordCount).to.equal(6);

    // console.log(trie.newPossible);

    expect(trie.newPossible).to.deep.equal(['pinney','pint', 'pine', 'pie']);
  });

  it('11: should be able to engulf an entire dictionary in one gulp', () => {
    var trie = new Trie();

    trie.populate(dictionary);

    expect(trie.wordCount).to.deep.equal(235886);
    expect(trie.nodeCount).to.deep.equal(792776);
  });

  it('isWord should be true only at the end of a word', () => {
    var trie = new Trie();

    trie.insert('fresh');
    trie.insert('freshly');

// querying 'fres'
    expect(trie.root.children
                  .f.children // f
                  .r.children // r
                  .e.children // e
                  .s          // s
                  .isWord).to.equal(false)

// querying 'fresh'
    expect(trie.root.children
                  .f.children // f
                  .r.children // r
                  .e.children // e
                  .s.children // s
                  .h          // h
                  .isWord).to.equal(true);

// querying 'freshl'
    expect(trie.root.children
                  .f.children // f
                  .r.children // r
                  .e.children // e
                  .s.children // s
                  .h.children // h
                  .l          // l
                  .isWord).to.equal(false);

// querying 'freshly'
    expect(trie.root.children
                  .f.children // f
                  .r.children // r
                  .e.children // e
                  .s.children // s
                  .h.children // h
                  .l.children // l
                  .y          // y
                  .isWord).to.equal(true);
  });

  it.skip('should sort the findWorded words based on their isAccessed value', () => {
    let trie = new Trie();

    trie.insert('flow');
    trie.insert('flower');
    trie.insert('flowering');
    trie.insert('flowerfire');
    trie.findWord('fl');
    trie.findWord('flo');
    trie.findWord('flow');
    trie.findWord('flow');

    // expect(trie.root.children
    //               .p.children
    //               .l.children
    //               .o.children
    //               .w.children
    //               .isAccessed).to.equal()

  // console.log(trie.root.children
  //               .f.children
  //               .l.children
  //               .o.children
  //               .w)
                // .isAccessed);
  });
});
