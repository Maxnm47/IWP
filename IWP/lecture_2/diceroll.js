function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max + 1- min) ) + min;
}

function diceroll(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = getRndInteger(1,6);
    }
    counter_6(arr);
}

function counter_6(arr){
    for (let i = 0; i < arr.length; i++) {
        if (checker(arr[i])) {
            console.log(i, arr[i]);
        }
    }
}

let checker = (v) => v === 6;

diceroll(10)

