let deadline = new Date()
deadline.setTime(deadline.getTime() + 5400000)

let x = setInterval(function () {

  let now = new Date().getTime();

  let duration = deadline - now;


  let hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
  );
  let minutes = Math.floor(
      (duration % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor(
      (duration % (1000 * 60)) / 1000
  );



  document.getElementById("hour")
          .innerHTML = hours;
  document.getElementById("minute")
          .innerHTML = minutes;
  document.getElementById("second")
          .innerHTML = seconds;


  if (duration < 0) {
      clearInterval(x);
      document.getElementById(
          "demo"
      ).innerHTML = "TIME UP";
 
      document.getElementById(
          "hour"
      ).innerHTML = "0";
      document.getElementById(
          "minute"
      ).innerHTML = "0";
      document.getElementById(
          "second"
      ).innerHTML = "0";
  }
}, 1000);

