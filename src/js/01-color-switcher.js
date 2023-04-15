const stopBtn = document.querySelector('[data-stop]');

stopBtn.setAttribute('disabled', '');

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
const body = document.querySelector('body');
let interval = null;
function onStartBtn() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

function onStopBtn() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
  clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
