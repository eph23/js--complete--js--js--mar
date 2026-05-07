'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Ephraim', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(eph instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

eph.calcAge();
matilda.calcAge();

console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(eph);

console.log(eph.hasOwnProperty('species'));
console.log(eph.hasOwnProperty('firstName'));

console.log(eph.__proto__);
console.log(eph.__proto__.__proto__);
console.log(eph.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

Person.hey = function () {
  console.log(`Hey there!`);
};

Person.hey();

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

  static hey() {
    console.log(`Hey...`);
  }
}

const ephCl = new PersonCl('Ephraim S.', 1988);
console.log(eph);
console.log(eph.age);
console.log(eph.fullName);

const walter = new PersonCl('Walter', 1965);
console.log(walter);

walter.fullName = 'Walter White';
console.log(walter);
console.log(walter.fullName);

PersonCl.hey();
