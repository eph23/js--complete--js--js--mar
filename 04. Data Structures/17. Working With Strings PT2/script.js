'use strict';

const airline = 'Bangladesh Biman';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'EPhraIM';
console.log(passenger);
const passengerToLowerCase = passenger.toLowerCase();
const passengerCorrected =
  passengerToLowerCase[0].toUpperCase() +
  passengerToLowerCase.slice(1).toLowerCase();
console.log(passengerCorrected);

const email = 'hello@ephraim.com';
const loginEmail = '   Hello@EPhraim.com \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23, Boarding door 23!`;
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('320'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
} else {
  console.log('Not part of the new airbus family');
}

const checkBaggage = function (items) {
  const normalize = items.trim().toLowerCase();

  if (normalize.includes('knife') || normalize.includes('gun')) {
    console.log('You are not allowed to board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket KNIFE');
checkBaggage('Snacks and Camera');
checkBaggage('Got some snacks and a gun for protection');
