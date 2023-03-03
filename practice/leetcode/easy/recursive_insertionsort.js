function Insert(Arr,k){
    let key = Arr[k]
    let index = k-1
    while(index >= 0 && Arr[index] > key){
        Arr[index + 1] = Arr[index]
        index = index - 1
    }
    Arr[index + 1] = key
}
function insertionsort(Arr, n){
    if(n == 0)
        return Arr

    insertionsort(Arr, n-1)
    Insert(Arr,n);

    return Arr
}


console.log(insertionsort([10,9,8,7,6,5,4,3,2,1], 9));