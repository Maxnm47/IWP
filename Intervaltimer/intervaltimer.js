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
      label.style.backgroundColor = "black";
      label.innerHTML = "";
      displaycolors.style.display = "block";
      displaynumbers.style.display = "none";
    } else {
      label.style.backgroundColor = "white";
      label.innerHTML = "0";
      displaycolors.style.display = "none";
      displaynumbers.style.display = "block";
    }
  });
});


function start() {
    //interval gathering
    input_interval_from = document.getElementById("interval_from").value;
    interval_from = parseInt(input_interval_from);
    input_interval_to = document.getElementById("interval_to").value;
    interval_to = parseInt(input_interval_to);


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
                console.log(colors + "colors is true")
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
            clearTimeout(cd_interval)
            clearInterval(countdown);
        }
    }, 1000);
}


function stop(){
    clearInterval(countdown);
    clearTimeout(cd_interval);
    console.log("stop")
    label.style.backgroundColor = "black"
}

function reset(){
  clearInterval(countdown);
  clearTimeout(cd_interval);
  document.getElementById("timer").innerHTML = "00:00"
  started = false;
  called = false;
  label.style.backgroundColor = "black";
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
    label.style.backgroundColor = "black";
  }, 1000);
}



function numberchanger() {
  var numbers = [1,2,3,4];
  const random = Math.floor(Math.random() * numbers.length);
  
  label.innerHTML = numbers[random];

  setTimeout(() => {
    label.innerHTML= 0;
  }, 1000);
}


function timekeeper(){
  min = Math.floor(time / 60);
  min = min < 10 ? "0" + min : min;
  sec = time % 60;
  sec = sec < 10 ? "0" + sec : sec;
  
  display = min + ":" + sec;
  document.getElementById("timer").innerHTML = display;
  time--;
  
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



function colorgetter() {
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


