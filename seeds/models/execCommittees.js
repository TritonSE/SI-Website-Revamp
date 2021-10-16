const ExecCommittee = require("../../db/models/execCommittee");

module.exports = async () => {
    await Promise.all([
        ExecCommittee.create(
            {
                year: 2021,
                rank: 1,
                name: "president",
                position: "president",
                bio: "I'm the president of this committee!",
                imageLink: "https://google.com",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Exec Committee");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Exec Committee: ${err}`);
        });
};
