var count = 20;

var input_interval = 5;

var called = false; //ændret fra let

var started = false;
var the_start = document.getElementById("start");

function the_starter() {
  if (!started) {
    console.log(1);
    the_start.innerHTML = "stop";
    started = true;
    //start();
  } else {
    console.log(2);
    the_start.innerHTML = "start";
    started = false;
    //stop();
  }
}

the_start.addEventListener("click", the_starter);


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
            clearTimeout(interval)
            clearInterval(countdown);
            console.log("Time's up!");
        }
    }, 1000);
}


function stop(){
    clearInterval(countdown);
    clearTimeout(interval);
    console.log("stop")
}

function reset(){
    clearInterval(countdown);
    clearTimeout(interval);
    console.log("reset")
}



let starter = document.getElementById("start");
starter.addEventListener("click", the_starter)


let reseter = document.getElementById("reset");
reseter.addEventListener("click", reset)




