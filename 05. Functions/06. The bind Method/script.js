'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name}, booked a seat on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ephraim S');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW('23', 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ephraim S');
bookEW23('Martha Cooper');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = rate => value => value + value * rate;
const addVat2 = addTaxRate(.23);

console.log(addVat2(100));
console.log(addVat2(23));
