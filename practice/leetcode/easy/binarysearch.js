function binary_search(arr, target, l, r){
    
    if (l <= r){
        let mid = Math.floor((l + r)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid] > target){
            return binary_search(arr, target, l, mid-1);
        }

        return binary_search(arr, target, mid+1, r);
    }

    return -1;
}



let nums = [1,3,5,6];
let target = 5
let r = nums.length - 1;
let l = 0;

console.log(binary_search(nums, target, l, r));
