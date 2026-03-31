'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');

btnCheck.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = '🚫 No number!';
  }
});
