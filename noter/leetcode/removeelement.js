var removeElement = function(num, val){
    let j = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] !== val){
            num[j] = num[i]
            i++;
        }
    }
    return j;
};

num = [3,2,2,3];

val = 3

//faster
var removeElement = function(nums, val) {
    let numsLength = nums.length-1;
    let pointer = 0;
    for (let i=0;i<=numsLength;i++) {
        if (nums[i] != val) {
            nums[pointer++] = nums[i];
        }
    }
    return pointer;
};
