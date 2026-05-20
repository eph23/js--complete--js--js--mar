'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve(`You win!`);
  } else {
    reject(`You lost your money`);
  }
});

lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.error(error));

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 3 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 4 seconds`);
    return wait(4);
  })
  .then(() => console.log(`I waited for 1 seconds`));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error(`Problem`)).catch(x => console.error(x));
console.log(x);
