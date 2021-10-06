/**
 * This file adds dummy data to the Newsletters table with various Newsletter objects.
 *
 * @summary   Populates the Newsletters table.
 * @author    Dhanush Nanjunda Reddy
 */

const Newsletters = require("../../db/models/newsletters");
const AdminAccounts = require("../../db/models/adminAccounts");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter
        Newsletters.create(
            { volume: 1, year: 2021, pdfLink: "google.com", imageLink: "google.com" },
            { logging: false }
        ),
        Newsletters.create(
            { volume: 2, year: 2022, pdfLink: "ebay.com", imageLink: "ebay.com" },
            { logging: false }
        ),
        Newsletters.create(
            { volume: 3, year: 2023, pdfLink: "amazon.com", imageLink: "amazon.com" },
            { logging: false }
        )
    ])
        .then(() => {
            // successfull population
            console.log("Finished Newsletter");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Newsletter: ${err}`);
        });
};
