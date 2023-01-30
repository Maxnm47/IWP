var time = 0;

var interval = 0;
var interval_from = 0;
var interval_to = 0;

var input_interval_from = 0;
var input_interval_to = 0;
var called = false; 

var started = false;
var the_start = document.getElementById("start");

function start() {
    if (!started) {
        the_start.innerHTML = "stop";
        started = true;

        time = set_time();

        //interval creation:
        interval = set_interval();


      main_cd();
    } else {
      the_start.innerHTML = "start";
      started = false;
      stop();
    }
  }
  
the_start.addEventListener("click", start);

var display;
var min = 0;
var sec = 0;
function main_cd() {
    countdown = setInterval(function() {
        
        min = Math.floor(time / 60);
        min = min < 10 ? "0" + min : min;
        sec = time % 60;
        sec = sec < 10 ? "0" + sec : sec;
        display = min + ":" + sec;
        document.getElementById("timer").innerHTML = display;

        time--;
        if (!called) {
            //interval = Math.floor(Math.random() * (interval_to - interval_from + 1)) + interval_from; //recalls interval, so it will be random
            interval = set_interval();//måske er det her langsomere? fordi der er getelementid
            
            cd_interval = setTimeout(function() {

                //her skal intervalet codes ind så den ændre farve.
                console.log("The interval:", interval);
                called = false;
            }, interval*1000);
            called = true;
        }
        
        if (time === 0) {
            called = true;
            clearTimeout(cd_interval)
            clearInterval(countdown);
        }
    }, 1000);
}


function stop(){
    clearInterval(countdown);
    clearTimeout(cd_interval);
    console.log("stop")
}

function reset(){
    clearInterval(countdown);
    clearTimeout(cd_interval);
    document.getElementById("timer").innerHTML = "00:00"
}
var reseter = document.getElementById("reset");
reseter.addEventListener("click", reset)


function set_time() {
    input_time = document.getElementById("time").value;
    if (input_time.includes(":")) {
      var [mins, secs] = input_time.split(":").map(val => parseInt(val));
      return time = (mins * 60) + secs;
    } else {
      return time = parseInt(input_time);
    }
  }
  

function set_interval(){
    input_interval_from = document.getElementById("interval_from").value;
    interval_from = parseInt(input_interval_from);

    input_interval_to = document.getElementById("interval_to").value;
    interval_to = parseInt(input_interval_to);
    interval = Math.floor(Math.random() * (interval_to - interval_from + 1)) + interval_from;

    return interval;
}
/////////////////////////////////////// test functions
function tester(){
    
}

var teste = document.getElementById("test");
teste.addEventListener("click", tester)

