const Sample = require("../../db/models/sample");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter 
        Sample.create({fName: "Punk", lName: "Kid", age: 21}, {logging: false}),
        Sample.create({fName: "Sam", lName: "Sung", age: 15},  {logging: false}),
        Sample.create({fName: "Kelly", lName: "Nik", age: 1},  {logging: false}),  
        Sample.create({fName: "Brad", lName: "Pitt", age: 56},  {logging: false}),
        Sample.create({fName: "Ronald", lName: "McDonald", age: 58},  {logging: false}),
        Sample.create({fName: "Johnny", lName: "Apple", age: 99},  {logging: false}),
    ]).then( () => {
        // successfull population
        console.log("Finished Sample");
    }).catch((err) => {
        // some error occurred
        console.error(`Sample: ${err}`);
    });
}