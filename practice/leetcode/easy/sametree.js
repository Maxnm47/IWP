var isSameTree = function(p, q) {
    if (!p && !q) {
      // both trees are empty
      return true;
    }
    if (!p || !q || p.val !== q.val) {
      // one tree is empty or the node values are not equal
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  