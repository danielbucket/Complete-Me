import Node from './node.js';

// this constructor analyzes the information passed into the Node constructor.

// 1: if the word 'pizza' is passed in, it needs to first discover if there is a node with the key 'p'.

// 2: if the node with the key 'p' does not exist, then a new node needs to be instantiated.

// 2.1: if a node with the key 'p' does exist, then it will need to search any children nodes to see of there is a node with the key of 'i'.

//these steps are repeated until all letters in the word are found.

// this.root is defaulted to null. It will be assigned to the new Node when one is made.

export default class CompleteMe {
  constructor() {
  // root is the top of the list
    this.root = null;
  // length is to indicate how many nodes there are
    this.length = 0;
  };

// a new Node is created only if there is no other node after it.

insert(data) {
  var newNode = new Node(data),
      currentNode = this.root;

//the first time, there will be no nodes
// if currentNode is not the 'root'
//if nothing is assigned to newNode, than it cannot be truthy. this is asking if newNode is not truthy.
    if(!currentNode) {
//if not truthy, then do these things 
      this.root = newNode;
      this.length++;
//^I read this and findally understood it, then, because I am high, I started rereading it again as though it were a new block and I couldnt understand it anymore. fuck me...
// newNode is now assigned to the root
      return newNode;
    }

    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    this.length++;

    return newNode;

  }
};
