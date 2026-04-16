'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWords] = str.split(' ');
  return [first.toUpperCase(), ...otherWords].join(' ');
};

const transformer = function (str, fnc) {
  console.log(`Transformed str: ${fnc(str)}`);
  console.log('Function name:', fnc.name);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const hi5 = function () {
  console.log('Hi! 👋');
};
document.body.addEventListener('click', hi5);
