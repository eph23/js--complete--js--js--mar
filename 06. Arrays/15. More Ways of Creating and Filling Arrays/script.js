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

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

console.log(new Array(1, 2, 3, 4));

const x = new Array(7);
x.fill(1, 3, 5);
console.log(x);

arr.fill('X', 1, 5);
console.log(arr);

const newArr = Array.from({ length: 7 }, () => 1);
console.log(newArr);

const properArray = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(properArray);

const movementsUI = Array.from(document.querySelectorAll('.movement__values'));
console.log(movementsUI);
