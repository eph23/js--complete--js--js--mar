"use strict";

// While loop
/* NOTE: The while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to */

let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights rep ${rep}`);
    rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a 6!!!`);
}
