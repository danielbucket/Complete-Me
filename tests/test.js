import { expect } from 'chai';
import { assert } from 'chai';
import Node from '../scripts/Node';
import CompleteMe from '../scripts/linked-list';

describe('Describe Node', () => {

  it('should be an instance of Trie', () => {
    var node = new Node();

    expect(node).is.instanceOf(Node);
  });

  it('should be able to take in a word', () => {
    var node = new Node('plethora');
    var node2 = new Node('specific')

    expect(node.data).to.equal('plethora')
    expect(node2.data).to.equal('specific')
  });

  it('should have children', () => {
    var node = new Node('mockumentary');

    expect(node.data).to.equal('mockumentary')
    expect(node.nextNode).to.equal(null)
  });

  it('should have a next property with a default deifition of null or whatever is passed in', () => {
    var node = new Node();
    var node2 = new Node('bill', 'murray')

    expect(node.nextNode).to.equal(null)
    expect(node2.nextNode).to.equal('murray')
  });

});


describe('describe CompleteMe', () => {

  it('should be an insance of TrieNode', () => {
    var completeMe = new CompleteMe();

    expect(completeMe).to.be.instanceOf(CompleteMe);
  });

  it('should have the property head that has a value of null', () => {
    var completeMe = new CompleteMe();

    expect(completeMe.root).to.equal(null)
  });

  it('should have a property of length set to zero', () => {
    var completeMe = new CompleteMe();

    expect(completeMe.length).to.equal(0)
  });

  it('should have an insert() method', () => {
    var completeMe = new CompleteMe();

    assert.isFunction(completeMe.insert)
  });

  it.skip('should ', () => {
    var completeMe = new CompleteMe('bane');


  });

});
