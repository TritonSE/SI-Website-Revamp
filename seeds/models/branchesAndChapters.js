const branchesAndChapters = require("../../db/models/branchesAndChapters");

module.exports = async () => {
    await Promise.all([
        branchesAndChapters.create(
            {
                name: "San Diego Branch",
                coordinates: [32.880157, -117.234892],
                isBranch: true,
                email: "whatever@gmail.com",
                siteLink: null,
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
