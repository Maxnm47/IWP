var time = 0;

var interval = 0;

var input_interval_from;
var interval_from;
var input_interval_to;
var interval_to;

var countdown;
var cd_interval;

var label = document.getElementById("colorbox");

var called = false; 

var started = false;
var the_start = document.getElementById("start");


var colors = true;
const colorInputs = document.querySelectorAll('input[name="numcol"]');
const displaycolors = document.getElementById("colorlabels");
const displaynumbers = document.getElementById("numberlabels");

colorInputs.forEach(input => {
  input.addEventListener("click", function() {
    //let label = document.getElementById("label");
    
    if(this.value === "colors") {

      label.style.backgroundColor = "transparent";

      label.innerHTML = "";
      displaycolors.style.display = "block";
      displaynumbers.style.display = "none";
      colors = true
    } else {

      label.style.backgroundColor = "transparent";

      label.innerHTML = "0";
      displaycolors.style.display = "none";
      displaynumbers.style.display = "block";
      colors = false
    }
  });
});


function start() {
    //interval gathering
    input_interval_from = document.getElementById("interval_from").value;
    interval_from = parseInt(input_interval_from);
    input_interval_to = document.getElementById("interval_to").value;
    interval_to = parseInt(input_interval_to);
    numbergetter();//get numbers
    colorgetter();//get the colors
    if (!started) {
        the_start.innerHTML = "stop";
        started = true;
        time = set_time();
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
      timekeeper(min,sec);
      if (!called) {
        interval = set_interval();
        
        cd_interval = setTimeout(function() {
          if(colors){
            color_changer();
          }
          
          else{
            numberchanger();
          }
          called = false;
        }, interval*1000);
        called = true;
      }
      
      if (time === 0) {
        called = false; //måske skal den være true
        
        clearTimeout(cd_interval);
        clearInterval(countdown);
        timekeeper(min,sec);
        reset();
      }
      time--;
    }, 1000);
}


function stop(){
    clearInterval(countdown);
    clearTimeout(cd_interval);
    console.log("stop")
    label.style.backgroundColor = "transparent"
}


var reseter = document.getElementById("reset");
reseter.addEventListener("click", reset)
function reset(){
  clearInterval(countdown);
  clearTimeout(cd_interval);
  document.getElementById("timer").innerHTML = "00:00"
  
  started = false;
  called = false;
  label.style.backgroundColor = "transparent";
  the_start.innerHTML = "start";
}
//home reset button, so the timer doesnt keep running
var t_home = document.getElementById("t_home");
t_home.addEventListener("click", reset)



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
    interval = Math.floor(Math.random() * (interval_to - interval_from + 1)) + interval_from;
    return interval;
}

let color1 = "red", color2 ="blue", color3 ="yellow", color4 = "green";

var colorlist = [color1, color2, color3, color4];

function color_changer() {
  const random = Math.floor(Math.random() * colorlist.length);
  label.style.backgroundColor = colorlist[random];
  console.log(colorlist[random]);

  setTimeout(() => {
    label.style.backgroundColor = "transparent";
  }, 1000);
}

let number1 = 1, number2 = 2, number3 = 3, number4 = 4;
let numberlist = [number1, number2, number3, number4];

function numberchanger() {
  const the_number = Math.floor(Math.random() * numberlist.length);
  label.innerHTML = numberlist[the_number];
  colors = false;
  
  setTimeout(() => {
    label.innerHTML = "0";
  }, 1000);
}


function timekeeper(){
  min = Math.floor(time / 60);
  min = min < 10 ? "0" + min : min;
  sec = time % 60;
  sec = sec < 10 ? "0" + sec : sec;
  
  display = min + ":" + sec;
  document.getElementById("timer").innerHTML = display;
  
  
}
//modal shit
var modal = document.getElementById("settingsmodal");
var settingsbtn = document.getElementById("settings");

var span = document.getElementsByClassName("close")[0];

settingsbtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
//end modal shit


function colorgetter() {
    label.style.backgroundColor = "transparent";
    color1 = document.getElementById('color_one').value
    color2= document.getElementById('color_two').value
    color3 = document.getElementById('color_three').value
    color4 = document.getElementById('color_four').value
    if(color1 !== "" && color2 !== "" && color3 !== "" && color4 !== ""){
        colorlist[0] = color1
        colorlist[1] = color2
        colorlist[2] = color3
        colorlist[3] = color4  
    }

}

function numbergetter(){
    label.style.backgroundColor = "transparent";
    number1 = document.getElementById('number_one').value;
    number2= document.getElementById('number_two').value;
    number3 = document.getElementById('number_three').value;
    number4 = document.getElementById('number_four').value;
    if(number1 !== "" && number2 !== "" && number3 !== "" && number4 !== ""){
      numberlist[0] = number1;
      numberlist[1] = number2;
      numberlist[2] = number3;
      numberlist[3] = number4;  
    }

}

//function tester() {
//  if(colors){
//    console.log("test");
//  }
//  else if(!colors){
//    console.log("not colors")
//  }
//}
//var test = document.getElementById("tester");
//test.addEventListener("click", tester);


