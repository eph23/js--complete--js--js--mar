"use strict";

// Function Declarations
function calcAgeDeclarations(birthYear) {
    return 2037 - birthYear;
}
const ageDeclarations = calcAgeDeclarations(1988);
console.log(ageDeclarations);
/* NOTE: 
Arguments vs Parameters
Arguments are the real values passed in a function
Parameters are just placeholders for function arguments to construct a function 
*/

// Function Expressions
/*NOTE: Anonymous function is a function with no name */
const calcAgeExpressions = function (birthYear) {
    return 2037 - birthYear;
};
const ageExpressions = calcAgeExpressions(1988);
console.log(ageExpressions);

/* NOTE: 
Expression vs Statement
Expressions creates values
Statement is set of instructions
 */
