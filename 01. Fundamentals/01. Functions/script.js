"use strict";

// Function Declarations
function logger() {
    console.log(`Hey Eph`);
}

// Invoking/calling/running/executing a function
logger();
logger();
logger();

// Function return statement and parameters
/* NOTE: Parameters are like variable and specific to only the function and placeholder for real values to be passed in a function */
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
    /* NOTE: a return statement always stops a function to execute further. A return statement can be considered as the result that the function is giving back for calling the function */
}

// Calling function with arguments
/* NOTE: Arguments are the real values passed when a function is called */
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice);
