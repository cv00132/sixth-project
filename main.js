var display = document.getElementById("display");
var bG = document.getElementById("bG");

function clock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

   if (hours.length < 2) {
     hours = "0" + hours;
   }
   if (minutes.length < 2) {
     minutes = "0" + minutes;
   }
   if (seconds.length < 2) {
     seconds = "0" + seconds;
  }

var timer = hours + ":" + minutes + ":" + seconds;
var chameleonBG = "#" + hours + minutes + seconds;

display.innerHTML = timer;
bG.style.backgroundColor = chameleonBG;
}

setInterval(clock, 1000);

console.log(clock());
// console.assert(myCallback, 1000)


//setInterval(clock(), 1000);
