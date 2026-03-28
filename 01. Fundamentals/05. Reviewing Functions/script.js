"use strict";

// Helper function
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

// Function Expression
const yearsUntilRetirement = function (firstName, birthYear) {
    const age = calcAge(birthYear); // Function calling another function

    const retirement = 65 - age;
    
//     Statement
    if (retirement > 0) {
        return `${firstName} will retire in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
};

console.log(yearsUntilRetirement("Eph", 1988));
console.log(yearsUntilRetirement("Eph", 1973));
console.log(yearsUntilRetirement("Bob", 1965));
