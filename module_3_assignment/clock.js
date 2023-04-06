function updateClock() {
  // Get the current time
  var currentTime = new Date();

  // Extract hours, minutes, and seconds
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Format the time with leading zeros
  var formattedTime =
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds);

  // Display the formatted time in the div element
  document.getElementById('clock').textContent = formattedTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
