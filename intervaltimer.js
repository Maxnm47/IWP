let count = 20;
let called = false;
let myInterval = setInterval(function() {
    console.log(count + " seconds remaining");
    count--;

    if (!called) {
        setTimeout(function() {
            console.log("X");
            called = false;
        }, 5000);
        called = true;
    }

    if (count === 0) {
        called = true;
        clearInterval(myInterval);
        console.log("Time's up!");
    }
}, 1000);
