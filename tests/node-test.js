import { expect } from 'chai';
import { assert } from 'chai';
import Node from '../scripts/node';
import Trie from '../scripts/trie';

describe('Lemme tell you about Node', () => {

  it('1: should be an instance of Node', () => {
    var node = new Node();

    expect(node).is.instanceOf(Node);
    assert.isObject(node);
  });

  it('2: should have a word property', () => {
    var node = new Node('word');

    expect(node.word).to.deep.equal('word');
  });

  it('3: should have a children property', () => {
    var node = new Node();

    expect(node.childrend).to.be.an.object;
  });

  it('4: should have an isWord property that is false by default', () => {
    var node = new Node();

    expect(node.isWord).to.deep.equal(false);
  });

});
