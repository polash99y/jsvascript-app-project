let timeLeft;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

const startTimer = (duration) => {
  let timer = duration;
  timerInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = displayMinutes + ":" + displaySeconds;
    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Breath Out";
      setTimeout(() => {
        timerDisplay.textContent = "Breath In";
        startTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = "Breath In";
  isRunning = false;
};

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timeLeft = 90;
    startTimer(timeLeft);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  stopTimer();
  isRunning = false;
});
