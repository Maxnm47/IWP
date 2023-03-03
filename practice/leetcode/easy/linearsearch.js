function linsearch(arr, target){
    if(arr.length === 0){
        return arr;
    }

    for(let item of arr){
        if(item === target){
            return item;
        }    
    }

}

console.log(linsearch([1,2,3,4,5,6,7], 7)); // Output: 7

