var arr = []
var index_of_sixes =[]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max + 1- min) ) + min;
}

function diceroll(n) {
    for (let i = 0; i < n; i++) {
        arr[i] = getRndInteger(1,6);
    }
    counter_6()
    
}
function counter_6(){
    for (let i = 0; i < arr.length; i++) {
        if (checker(arr[i])) {
            console.log(i, arr[i]);
        }
    }
}

let checker = (v) => v === 6;

diceroll(10)

