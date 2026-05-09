'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved of ${val}`);
    }
  }
}

const acc1 = new Account('Ephraim S', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(150);
console.log(acc1);
acc1.requestLoan(1000);
console.log(acc1);
