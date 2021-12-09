function showTimer() {
  console.log("showTimer function is live running");
  var time = "00:00:00";
  var customerName = prompt("Please enter time", "00:01:00");
  var pattern = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/;//HH:MM:SS 24-hour format with leading 0
  var isValidTime = pattern.test(customerName);
  while(!isValidTime){
    customerName = prompt("Please enter valid time", "00:01:00");
    isValidTime = pattern.test(customerName);
  }
  time=customerName;

  document.getElementsByClassName("start_button")[0].style.visibility = "hidden";
  document.getElementsByClassName("stop_button")[0].style.visibility = "visible";
  
  countdown = document.getElementById("countdown");
  countdown.innerHTML = time;

  //set inerval anonymous function
  var Timer = setInterval(function () {
      var hr = 0;   var min = 0;   var sec = 0;
      var timeUp = false;
      t = time.split(":");//object
      hr = parseInt(t[0]);
      min = parseInt(t[1]);
      sec = parseInt(t[2]);
      
      //borrow sec from min from hr
      if (sec == 0) {
          if (min > 0) {
            sec = 59;
            min--;
          } else if (hr > 0) {
            sec = 59;
            min = 59;
            hr--;
          } else {
            timeUp = true;
          }
      } else {
          sec--;
      }
      if (hr < 10) hr = "0" + hr;
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;
      
      time = hr + ":" + min + ":" + sec;
      if (timeUp)
        time = "TIME UP";
      countdown = document.getElementById("countdown");
      countdown.innerHTML = time;

      if (timeUp) {
          document.getElementsByClassName("start_button")[0].style.visibility = "visible";
          document.getElementsByClassName("stop_button")[0].style.visibility = "hidden";
          clearInterval(Timer);
      }

      var stop = document.getElementsByClassName("stop_button")[0];
      stop.addEventListener("click", function () {
        time = "TIMER STOP";
        countdown = document.getElementById("countdown");
        countdown.innerHTML = time;
        document.getElementsByClassName("start_button")[0].style.visibility = "visible";
        document.getElementsByClassName("stop_button")[0].style.visibility = "hidden";
        clearInterval(Timer);
      });
    }, 1000);
}
