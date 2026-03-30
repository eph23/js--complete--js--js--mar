"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Struggling Web-Dev",
    ["Michel", "Steven", "Jay"],
];

// Looping array
for (let i = 0; i < eph.length; i++) {
    console.log(eph[i], typeof eph[i]);
}

const types = [];
for (let i = 0; i < eph.length; i++) {
    types.push(typeof eph[i]);
}

console.log(types);

const ages = [];
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1991, 2007, 1969, 2020];
for (let i = 0; i < years.length; i++) {
    let age = calcAge(years[i]);
    ages.push(age);
}

console.log(ages);

// Continue
/* NOTE: The continue statement is used to skip the current iteration of a loop and move directly to the next one */
console.log("==Continue==");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") continue;
    console.log(eph[i], "is a", typeof eph[i]);
}

// Break
/* NOTE: The break keyword immediately terminates the innermost loop (for, while, do...while) or switch statement and transfers control to the next line of code */
console.log("==Break==");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") break;
    console.log(eph[i], "is a", typeof eph[i]);
}
console.log("Ended");
