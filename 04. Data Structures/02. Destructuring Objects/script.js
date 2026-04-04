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
};

// Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);

// Renaming object key
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating
let a = 111;
let b = 999;
const obj = { a: 23, b: 77, c: 14 };

({ a, b } = obj);
console.log(a);
console.log(b);

// Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// Function argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
});
