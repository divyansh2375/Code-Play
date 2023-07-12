const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString()
    .padStart(2, "0")}`;

  // `${minutes.toString().padStart(2, "0")}:${seconds
  //     .toString()
  //     .padStart(2, "0")}`;
  timerE1.innerHTML = formattedTime;
}

function start() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
  }, 1000);
  if (timeLeft === 0) {
    clearInterval(interval);
    alert("Time's Up");
    timeLeft = 1500;
    updateTimer();
  }
}
function stop() {
  clearInterval(interval);
}

function reset() {
  timeLeft = 1500;
  updateTimer();
  stop();
}

startE1.addEventListener("click", start);
stopE1.addEventListener("click", stop);
resetE1.addEventListener("click", reset);
