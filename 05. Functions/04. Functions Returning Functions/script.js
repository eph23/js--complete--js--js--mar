'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} 👋`);
  };
};

const hey = greet('Hey');
hey('Eph');
hey('Steven');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name} 🙋‍♂️`);
greetArr('Hello')('Eph');
