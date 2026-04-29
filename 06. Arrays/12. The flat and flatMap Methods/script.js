'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr.flat());

const deepArr = [[['a', 'b'], 'c'], ['e', ['f', 'g']], 'h', 'i'];
console.log(deepArr.flat(3));

const accountMovements = accounts.map(account => account.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce(
  (accumulator, current) => accumulator + current,
  0,
);
console.log(overallBalance);

const flatOverallBalance = accounts
  .flatMap(account => account.movements)
  .reduce((accumulator, current) => accumulator + current, 0);

console.log(flatOverallBalance);
