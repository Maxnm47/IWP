var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
};

//faster
var maxDepth = function(root) {
    if(root==null)
        return 0;
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))

};