var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(map[complement] !== undefined){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
};


nums = [3,2,4]
target = 6

console.log(twoSum(nums, target))