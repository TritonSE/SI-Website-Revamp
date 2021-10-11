const branchesAndChapters = require("../../db/models/branchesAndChapters");

module.exports = async () => {
    await Promise.all([
        branchesAndChapters.create(
            {
                name: "Budapest Branch",
                latitude: 47.497913,
                longitude: 19.040236,
                isBranch: true,
                email: "sakyadhita@budapest.com",
                siteLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "San Diego Chapter",
                latitude: 32.732346,
                longitude: -117.196053,
                isBranch: false,
                email: "sakyadhita@sandiego.com",
                siteLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Amesterdam Chapter",
                latitude: 52.377956,
                longitude: 4.89707,
                isBranch: false,
                email: "sakyadhita@amesterdam.com",
                siteLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Bangkok Branch",
                latitude: 100.591507,
                longitude: 13.726316,
                isBranch: true,
                email: "sakyadhita@bangkok.com",
                siteLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Delhi Branch",
                latitude: 28.679079,
                longitude: 77.06971,
                isBranch: true,
                email: "sakyadhita@delhi.com",
                siteLink: "https://en.wikipedia.org/wiki/Anushka_Sharma",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Branches and Chapters");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Branch or Chapter: ${err}`);
        });
};
