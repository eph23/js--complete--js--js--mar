"use strict";

// Object literals
const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Struggling Web-Dev",
    friends: ["Michael", "Steven", "Jay"],
};

console.log(eph);

// Accessing object value
console.log(eph.lastName);
console.log(eph["job"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);

// Mutating object values
eph.location = "Bangladeh";
eph["facebook"] = "@ephs";
console.log(eph);

// Challenge
/* `Ephraim has 3 friends and his best friend is called Michael` */
console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[0]}`,
);
