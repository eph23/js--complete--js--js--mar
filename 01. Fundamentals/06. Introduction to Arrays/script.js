"use strict";

// Array literal
const friends = ["Michael", "Steven", "Jacob"];
console.log(friends);

// Array constructor
const years = [1991, 1984, 2008, 2020];
console.log(years);

// Accessing array value
console.log(friends[0]);

// Array property
console.log(friends.length);

// Accessing value with property
console.log(friends[friends.length - 1]);

// Mutating array value
/* NOTE: We can mutate a value of an array but we cant replace whole array */
friends[2] = "Jay";
console.log(friends);

/* NOTE: An array can hold any type of values */
const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "Struggling Web-Dev", friends];
console.log(eph);

// Exercise
const birthYears = [1990, 1967, 2002, 2010, 2018];
console.log(birthYears)

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
