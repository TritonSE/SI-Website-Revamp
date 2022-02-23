/**
 * This file adds dummy data to the Admin Accounts table with various account objects.
 *
 * @summary   Populates the Newsletters table.
 * @author    Amrit Kaur Singh
 */

const AdminAccounts = require("../../db/models/adminAccounts");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter
        AdminAccounts.create(
            { name: "Sally Doe", email: "sdoe@random.com", password: "password" },
            { logging: false }
        ),
        AdminAccounts.create(
            { name: "Navid Boloorian", email: "navidboloor@gmail.com", password: "password" },
            { logging: false }
        ),
        AdminAccounts.create(
            { name: "John Doe", email: "jdoe@random.com", password: "password" },
            { logging: false }
        ),
        AdminAccounts.create(
            { name: "Harry Potter", email: "hpotter@random.com", password: "password" },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Admin Accounts");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Admin Accounts: ${err}`);
        });
};
