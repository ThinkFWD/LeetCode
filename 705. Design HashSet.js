/*
Question 705. 

Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet. 
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.storage = {};
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.storage[key] = true;
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  delete this.storage[key];
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return (this.storage[key]) ? true : false;
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = Object.create(MyHashSet).createNew()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/