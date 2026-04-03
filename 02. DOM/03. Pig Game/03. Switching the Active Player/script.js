'use strict';

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const player_0_el = document.querySelector('.player--0');
const player_1_el = document.querySelector('.player--1');

const currentScore_0_el = document.querySelector('#current--0');
const currentScore_1_el = document.querySelector('#current--1');
const score_0_el = document.querySelector('#score--0');
const score_1_el = document.querySelector('#score--1');
const dice_el = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score_0_el.textContent = 0;
score_1_el.textContent = 0;
dice_el.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  dice_el.classList.remove('hidden');
  dice_el.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player_0_el.classList.toggle('player--active');
    player_1_el.classList.toggle('player--active');
  }
});
