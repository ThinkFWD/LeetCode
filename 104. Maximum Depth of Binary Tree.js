/*
Question 104
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let maxDepth = 0;
  const dive = (node, count) =>{
      if(!node){
          if(maxDepth < count){
              maxDepth = count;
              return;
          }
          return;
      }
      dive(node.left, count+1);
      dive(node.right, count+1);
  }    
  dive(root,0);
  return maxDepth;
};