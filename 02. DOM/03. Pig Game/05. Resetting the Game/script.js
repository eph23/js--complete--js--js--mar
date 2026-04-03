'use strict';

let playing, scores, currentScore, activePlayer;

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

const init = function () {
  playing = true;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score_0_el.textContent = 0;
  score_1_el.textContent = 0;
  currentScore_0_el.textContent = 0;
  currentScore_1_el.textContent = 0;

  dice_el.classList.add('hidden');

  player_0_el.classList.add('player--active');
  player_1_el.classList.remove('player--active');
  player_0_el.classList.remove('player--winner');
  player_1_el.classList.remove('player--winner');
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player_0_el.classList.toggle('player--active');
  player_1_el.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;

    dice_el.classList.remove('hidden');
    dice_el.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      dice_el.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
