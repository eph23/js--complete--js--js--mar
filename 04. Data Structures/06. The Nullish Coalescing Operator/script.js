'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  // Object as arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address,
    time = '22:00',
  }) {
    console.log(
      `We have received your order! Your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  // Spread operator as function argument
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

// Short circuiting
// The nullish coalescing operator returns the first nullish value if available
console.log(3 ?? 'Eph');
console.log('' ?? 'Eph');
console.log(true ?? 0);
console.log(undefined ?? null);
console.log(undefined ?? 0 ?? '' ?? 'Hello' ?? 23 ?? null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2);
