import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name=delay]');
const inputStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');

form.addEventListener('submit', formOnSubmit);
// document.addEventListener('click', formOnSubmit);

function formOnSubmit(event) {
  event.preventDefault();
  console.log(event);
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  const inputAmount = Number(amount.value);
  // console.log(inputDelay);
  let currentDelay = 0;

  setTimeout(() => {
    for (let i = 1; i <= inputAmount; i++) {
      currentDelay = inputDelay + (i - 1) * inputStep;
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      console.log(i);
      console.log(inputDelay);
      console.log(inputStep);
      console.log(currentDelay);
    }
  }, inputDelay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
