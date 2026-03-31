'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const body = document.querySelector('body');

let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;

/* numberEl.textContent = secretNumber; */

btnCheck.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    messageEl.textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    messageEl.textContent = '✅YOU GUESSED IT RIGHT!!!';
    numberEl.textContent = secretNumber;
    numberEl.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
    btnCheck.disabled = true;
    guessInput.disabled = true;
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      messageEl.textContent = '📈 Too high';
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💥YOU LOST';
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      messageEl.textContent = '📈 Too low';
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💥YOU LOST';
      scoreEl.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  /*   numberEl.textContent = secretNumber; */

  scoreEl.textContent = score;
  guessInput.value = '';
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  body.style.backgroundColor = '#222';
  btnCheck.disabled = false;
  guessInput.disabled = false;
});
