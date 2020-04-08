'use strict';
let values = [];
//Complete this algo

const nodeValGetter = (node) => {
  if (values.includes(node.value))  return true;
  if (!node.next) return false;
  values.push(node.value);
  return nodeValGetter(node.next);
}

const isLoop = (linkedlist) => {
  return nodeValGetter(linkedlist.head);
};
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop

//variables
//let headnode = linkedlist.head
///headsnext = headnode.next

// global array of previous values
// if (globalarray includes current node's next value)  yes is a loop
// if there next node is null or undefined 
// if not, add current node's value to global array
// recursively run function with current node's 'next' node