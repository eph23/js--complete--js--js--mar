'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'standard',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const account5 = {
  owner: 'Eph S',
  movements: [],
  interestRate: 2,
  pin: 5555,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4, account5];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const reversedMovements = movements.toReversed();
console.log(reversedMovements);
console.log(movements);

const sorted = movements.toSorted();
console.log(sorted);
console.log(movements);

const spliced = movements.toSpliced(5);
console.log(spliced);
console.log(movements);

const newMovements = movements.with(1, 'X');
console.log(newMovements);
console.log(movements);
