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

const bankDeposits = accounts.map(account => account.movements);
console.log(bankDeposits);

// Exercise #1
const sumAllBankDeposits = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement > 0)
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(sumAllBankDeposits);

// Exercise #2
const depositsUpThousand = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement >= 1000).length;
console.log(depositsUpThousand);

const depositsUpThousand_2 = accounts
  .flatMap(account => account.movements)
  .reduce(
    (accumulator, current) => (current >= 1000 ? accumulator++ : accumulator),
    0,
  );
console.log(depositsUpThousand);

// Exercise #3
const { deposits, withdrawals } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      return acc;
    },
    { deposits: 0, withdrawals: 0 },
  );
console.log(deposits, withdrawals);

const { deposits_2, withdrawals_2 } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, cur) => {
      acc[cur > 0 ? 'deposits_2' : 'withdrawals_2'] += cur;
      return acc;
    },
    { deposits_2: 0, withdrawals_2: 0 },
  );
console.log(deposits_2, withdrawals_2);

// Exercise #4

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join(' ');

  return titleCase;
};

console.log(convertTitleCase(`This is a nice title`));
console.log(convertTitleCase(`This is a LONG title but not too long`));
