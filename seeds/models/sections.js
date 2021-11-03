const Sections = require("../../db/models/sections");

module.exports = async () => {
    await Promise.all([
        Sections.create(
            {
                page: "Home",
                title: "Introduction",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Our Mission",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "How You Can Help",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "Bodhisattvas",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "The Buddha",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "AboutUs",
                title: "Founding Members",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Sections");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Sections: ${err}`);
        });
};
