/**
 * This file adds dummy data to the Newsletters table with various Newsletter objects.
 *
 * @summary   Populates the Newsletters table.
 * @author    Dhanush Nanjunda Reddy
 */

const Newsletters = require("../../db/models/newsletters");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter
        Newsletters.create(
            {
                volume: 1,
                number: 1,
                year: 2021,
                pdfLink:
                    "https://www.reddit.com/r/UCSD/comments/pyx2ao/why_are_there_so_many_fucking_hot_girls_at_ucsd/",
                imageLink:
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 1,
                number: 2,
                year: 2021,
                pdfLink:
                    "https://www.reddit.com/r/UCSD/comments/pyx2ao/why_are_there_so_many_fucking_hot_girls_at_ucsd/",
                imageLink:
                    "https://www.gardeningknowhow.com/wp-content/uploads/2015/02/buddha-garden-400x266.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 2,
                number: 1,
                year: 2021,
                pdfLink:
                    "https://www.reddit.com/r/UCSD/comments/pyx2ao/why_are_there_so_many_fucking_hot_girls_at_ucsd/",
                imageLink:
                    "https://bodhi-college.org/wp-content/uploads/buddhist-hand-2696227_1280.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 2,
                number: 1,
                year: 2022,
                pdfLink:
                    "https://www.reddit.com/r/UCSD/comments/pyx2ao/why_are_there_so_many_fucking_hot_girls_at_ucsd/",
                imageLink:
                    "https://www.lionsroar.com/wp-content/uploads/2017/09/ahmed-saffu-420396.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 3,
                number: 1,
                year: 2023,
                pdfLink:
                    "https://www.reddit.com/r/UCSD/comments/pyx2ao/why_are_there_so_many_fucking_hot_girls_at_ucsd/",
                imageLink: "http://www.headblade.com/blog/wp-content/uploads/2019/11/Monks.jpg",
            },
            { logging: false }
        ),
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
