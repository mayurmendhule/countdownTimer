document.addEventListener("DOMContentLoaded", function() {
    var countdownInterval;
    var currentCountdownTime = 0;
    
    document.getElementById('timeCount').addEventListener('keydown', function(event) {
      if (event.keyCode === 13) { // check for enter key
        var inputVal = parseFloat(this.value);
        if (isNaN(inputVal) || inputVal < 0) {
          inputVal = 0;
        } else {
          inputVal = Math.floor(inputVal); // round off to nearest integer
        }
        
        if (inputVal !== currentCountdownTime) {
          clearInterval(countdownInterval); // stop any previous countdown
          
          currentCountdownTime = inputVal;
          document.getElementById('current-time').textContent = currentCountdownTime; // update current time with initial value
          
          countdownInterval = setInterval(function() {
            if (currentCountdownTime > 0) {
              currentCountdownTime--;
              document.getElementById('current-time').textContent = currentCountdownTime; // decrement by 1 every second and update the display
            } else {
              clearInterval(countdownInterval); // stop the countdown when it reaches 0
            }
          }, 1000); // update every second (1000 milliseconds)
        }
        
        this.value = ''; // clear the input field
      }
    });
  });