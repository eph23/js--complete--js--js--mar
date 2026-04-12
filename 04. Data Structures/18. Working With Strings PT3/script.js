'use strict';

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Ephraim S'.split(' ');
console.log(firstName);
console.log(lastName);

const fullName = ['Mr.', firstName, lastName].join(' ');
console.log(fullName);

const capitalizeName = function (name) {
  const splitted = name.split(' ');
  let capitalized = [];

  for (const word of splitted) {
    capitalized.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(capitalized.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ephraim s');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '-'));
console.log('ephraim'.padStart(25, '-'));
console.log('ephraim'.padEnd(25, '-'));
console.log('ephraim'.padStart(10, '-').padEnd(15, '+'));

const maskCreditCard = function (num) {
  const str = num + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
};

maskCreditCard(56468948916000);
maskCreditCard(7897885641);

const weatherMessage = 'Bad weather.... All Departures Delayed...';
console.log(weatherMessage.repeat(5));

const planesInLine = function (num) {
  console.log(`There are ${num} planes in line ${'🛬'.repeat(num)}`);
};

planesInLine(5);
planesInLine(12);
planesInLine(7);
