'use strict';

class Account {
  // Private fields
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    // Public fields
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  // Private method
  #approveLoan(val) {
    return true;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved of ${val}`);
    }
    return this;
  }
}

const acc1 = new Account('Ephraim S', 'EUR', 1111);

const movements = acc1
  .deposit(300)
  .deposit(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();
console.log(acc1);
console.log(movements)