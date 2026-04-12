'use strict';

const airline = 'Bangladesh Biman';
const plane = 'A320';

// Accessing string value
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// String property
console.log(airline.length);
console.log('B737'.length);

// Methods
console.log(airline.indexOf('B'));
console.log(airline.lastIndexOf('B'));
console.log(airline.indexOf('Biman'));

console.log(airline.slice(11));
console.log(airline.slice(0, 6));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === 'B' || seat === 'E') {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('5A');
checkMiddleSeat('22C');
checkMiddleSeat('25E');
