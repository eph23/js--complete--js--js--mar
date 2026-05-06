'use strict';

const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`This is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const eph = new PersonCl('Ephraim S.', 1988);
console.log(eph);
console.log(eph.age);
console.log(eph.fullName);

const walter = new PersonCl('Walter', 1965);
console.log(walter);

walter.fullName = 'Walter White';
console.log(walter);
console.log(walter.fullName);
