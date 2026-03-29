"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Struggling Web-Dev",
    friends: ["Michael", "Steven", "Jay"],
    hasDriversLicense: true,

    // Object method
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph);
console.log(eph.calcAge());

// Challenge
/* `Ephraim is a 46 years old Struggling Web-Dev and he has a drivers license`; */
console.log(eph.getSummery());
