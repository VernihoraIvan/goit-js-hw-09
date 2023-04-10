import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const flatpickr = require('flatpickr');

flatpickr('#datetime-picker', {
  enableTime: true,
  enableSeconds: true,
  dateFormat: 'Y-m-d H:i:S',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStart);

const input = document.querySelector('#datetime-picker');

function measureCurrentTime() {
  const dateNow = Date.now();
  const date = new Date(input.value);
  const getTimeFromInput = date.getTime(date);
  const difference = getTimeFromInput - dateNow; //difference between now and time from input in MS`s
  timeCheck(difference);
  console.log(difference);
  const timeObject = getTimeComponents(difference);
  timeRender(timeObject);
  return timeObject;
}

document.addEventListener('change', function () {
  measureCurrentTime();
});

function timeRender(timeObject) {
  let daysCounter = document.querySelector('[data-days]');
  let hoursCounter = document.querySelector('[data-hours]');
  let minutesCounter = document.querySelector('[data-minutes]');
  let secondsCounter = document.querySelector('[data-seconds]');

  daysCounter.textContent = timeObject.days;
  hoursCounter.textContent = timeObject.hours;
  minutesCounter.textContent = timeObject.mins;
  secondsCounter.textContent = timeObject.secs;
}

function timeCheck(difference) {
  const { days, hours, mins, secs } = getTimeComponents(difference);

  if (hours < 0 || mins < 0 || secs < 0 || days < 0) {
    alert('Please choose a date in the future');
  }
}

function getTimeComponents(time) {
  const days = Math.floor(
    (time % (1000 * 60 * 60 * 24 * 24)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}

function onStart() {
  setInterval(() => {
    const measuredTime = measureCurrentTime();
    timeRender(measuredTime);
  }, 1000);
}

// console.dir(date); //date from input in wide format
//   console.log(`date now in MS's ${dateNow}`);
//   console.log(input.value); //date from input in short format
// console.log(`date from input im MS's ${getTimeFromInput}`); //date from input im MS`s
