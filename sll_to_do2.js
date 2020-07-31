// To Do 2
// This chapter you familiarized yourself with basic manipulation of the singly linked list data structure. Here are concepts used in this chapter?s challenges.

// classes and objects 
// object constructors 
// local variables vs. heap allocations
// push() and pop() 
// pointers 
// private vs. public
// === vs. == 
// reference vs. value 
// time vs. space tradeoff
// Here is what we have so far for ListNode:

function ListNode(value) {
    this.val = value;
    this.next = null;
    this.front = function() {

     }
    // more functions here
}
// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?



// SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won?t be the last), and you do NOT have a pointer to the previous node. Also, don?t lose any subsequent nodes pointed to by .next.


// Find previous node of the node to be deleted.
// Change the next of previous node.
// Free memory for the node to be deleted.


function deleteNode(list, value) {
    var node = list,
        last;

    if (node && node.value === value) {
        return node.next;
    }

    while (node && node.value !== value) {
        last = node,
        node = node.next;
    }
    if (last && node.value === value) {
        last.next = node.next;
    }
    return list;
}

or

function rDeleteNode({value, next}, x) {       
   if(value === x){
      return next ? rDeleteNode(next, x) : null;
   } else {
      return {
        next : rDeleteNode(next),
        value
       };
  }
}

// SList: Copy
// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

// 1) Create all nodes in copy linked list using next pointers. 2) Store the node and its next pointer mappings of original linked list. 3) Change next pointer of all nodes in original linked list to point to the corresponding node in copy linked list.




// SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.



