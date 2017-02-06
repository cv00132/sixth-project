var display = document.getElementById("display");
var bG = document.getElementById("bG");

function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();


   if (hours > 12) {
     hours = hours - 12;
   }
   if (hours < 10) {
     hours = "0" + hours;
   }
   if (minutes < 10) {
     minutes = "0" + minutes;
   }
   if (seconds < 10) {
     seconds = "0" + seconds;
   }


var timer = "#" + hours + minutes + seconds;
var chameleonBG = "#" + hours + minutes + seconds;

display.innerHTML = timer;
bG.style.backgroundColor = chameleonBG;
}

setInterval(clock, 1000);

console.log(clock());
// console.assert(myCallback, 1000)


//setInterval(clock(), 1000);
