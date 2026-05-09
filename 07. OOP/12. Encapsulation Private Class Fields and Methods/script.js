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
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved of ${val}`);
    }
  }
}

const acc1 = new Account('Ephraim S', 'EUR', 1111);
console.log(acc1);

acc1.deposit(500);
acc1.withdraw(200);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
