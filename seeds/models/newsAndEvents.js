const newsAndEvents = require("../../db/models/newsAndEvents");

module.exports = async () => {
    await Promise.all([
        newsAndEvents.create(
            {
                title: "Meetup",
                description: "",
                imageLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                redirectLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Reunion",
                description: "Some event",
                imageLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
                redirectLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
                openInSameTab: true,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Gathering",
                description: "Some event",
                imageLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
                redirectLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Rally",
                description: "",
                imageLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
                redirectLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
                openInSameTab: true,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished News and Events");
        })
        .catch((err) => {
            // some error occurred
            console.error(`News or Event: ${err}`);
        });
};
