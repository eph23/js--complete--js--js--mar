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
};

// Array destructuring
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(arr);
console.log(a);
console.log(b);
console.log(c);

const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// Skipping a value
let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

// Swapping a value
[secondary, primary] = [primary, secondary];
console.log(primary);
console.log(secondary);

// Destructuring returned value
const [starter, main] = restaurant.order(2, 0);
console.log('Starter=>', starter);
console.log('Main=>', main);

// Nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const deepNested = [5, 6, [7, 8]];
const [k, , [m, n]] = deepNested;
console.log(k, m, n);

// Default values
const [p, q, r = -1] = [8, 9];
console.log(p, q, r);
