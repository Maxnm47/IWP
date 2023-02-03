function removeDuplicates(nums) {
    let hashmap = {};
    let result = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (!hashmap[nums[i]]) {
        hashmap[nums[i]] = true;
        result.push(nums[i]);
      }
    }
    return result;
  }
  

nums = [1,1,2]

console.log(removeDuplicates(nums))