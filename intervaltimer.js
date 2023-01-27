var count = 20;

var input_interval = 5;

let called = false;
function start(){
    countdown = setInterval(function() {
    console.log(count);
    count--;

        if (!called) {
            interval = setTimeout(function() {
                console.log("X");
                called = false;
            }, 5000);
            called = true;
        }
        
        if (count === 0) {
            called = true;
            clearInterval(countdown);
            console.log("Time's up!");
        }
    }, 1000);
}


function stop(){
    clearInterval(countdown)
    clearTimeout(interval)
}

start();