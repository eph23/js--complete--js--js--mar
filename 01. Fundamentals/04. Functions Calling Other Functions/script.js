"use strict";

// Helper function
/* NOTE: A helper function is an auxiliary function used to perform a specific part of a larger computation or to simplify the logic of another function */
const cutFruitPieces = function (fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    // Calling helper function inside another function
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(5, 2));
