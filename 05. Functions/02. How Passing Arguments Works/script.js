'use strict';

const flight = 'LH234';
const eph = {
  name: 'Ephraim S',
  passport: 'BD22546',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 'BD22546') {
    console.log(`Welcome to flight no ${flightNum}, ${passenger.name}`);
    console.log(`Checked in!`);
  } else {
    console.log(`Wrong passport...`);
  }
};

checkIn(flight, eph);
console.log(flight);
console.log(eph);

const newPassport = function (person) {
  person.passport = `BDH${Math.floor(Math.random() * 100000)}`;
};
newPassport(eph);
console.log(eph);
checkIn(flight, eph);
