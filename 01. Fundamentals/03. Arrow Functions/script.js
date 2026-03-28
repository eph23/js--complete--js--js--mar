"use strict";

// Function Declarations
function calcAgeDeclarations(birthYear) {
    return 2037 - birthYear;
}
const ageDeclarations = calcAgeDeclarations(1988);
console.log(ageDeclarations);

// Function Expressions
const calcAgeExpressions = function (birthYear) {
    return 2037 - birthYear;
};
const ageExpressions = calcAgeExpressions(1988);
console.log(ageExpressions);

// Arrow Functions
// Simple form of arrow function
const calcAgeArrow = (birthYear) => 2037 - birthYear;
const ageArrow = calcAgeArrow(1988);
console.log(ageArrow);

// Proper arrow function
const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2037 - birthYear;
    const retirement = 67 - age;

    return `${firstName} will retire in ${retirement} years`;
};

console.log(yearsUntilRetirement("Eph", 1988));
console.log(yearsUntilRetirement("Bob", 1975));
