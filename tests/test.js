import { expect } from 'chai';
import Node from '../scripts/Node';
import LinkedList from '../scripts/linked-list';

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
    var node = new Node('mockumentary','child');

    expect(node.data).to.equal('mockumentary')
    expect(node.child).to.equal('child')
  });

});

describe('describe LinkedList', () => {

  it('should be an insance of TrieNode', () => {
    var trieNode = new LinkedList();

    expect(trieNode).to.be.instanceOf(LinkedList);
  });

});
