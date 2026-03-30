"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Struggling Web-Dev",
    ["Michel", "Steven", "Jay"],
    true,
];

// Looping backward
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(i, eph[i]);
}

// Loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Exercise ${exercise}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep ${rep}`);
    }
    console.log(`-----End Exercise ${exercise}`);
}
