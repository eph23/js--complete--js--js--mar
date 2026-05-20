'use strict';

console.log('Test Start');
setTimeout(() => console.log(`O sec timer`), 0);
Promise.resolve(`Resolved promise 1`).then(response => {
  console.log(response);
});

Promise.resolve('Resolved promise 2').then(response => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(response);
});
