"use strict";

const friends = ["Michael", "Steven", "Jacob"];
console.log(friends);

// push method - adds element at the end of an array
friends.push("Jay");
console.log(friends);

// unshift method - adds element at the beginning of an array
friends.unshift("Susan");
console.log(friends);

// shift method
/* NOTE: Removes element from the end of an array and returns the removed element */
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift method
/* NOTE: Removes element from the beginning of an array and returns the removed element */
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

// includes method
/* NOTE: Returns true if found, returns false if not found  */
console.log(friends.includes("Susan"));

if (friends.includes("Steven")) {
    console.log(`You have a friend called Steven`);
}
