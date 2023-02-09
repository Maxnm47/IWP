function searchInsert(nums, target) {
    let left = 0,
        right = nums.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return left;
  }
  
//faster: 
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        const current = nums[middle]
        if (current === target) {
            return middle
        } else if (current < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    if (left > right) {
        return left
    } else if (left < right) {
        return right
    }
};