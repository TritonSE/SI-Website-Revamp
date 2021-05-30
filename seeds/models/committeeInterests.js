const CommitteeInterest = require("../../db/models/committeeInterests");

module.exports = async () => {
    await Promise.all([
        CommitteeInterest.create(
            { title: "Editing", description: "Editing is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Tech Support", description: "Tech is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Administration", description: "Administration is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Research", description: "Research is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Social Justice", description: "Social Justice is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Writing", description: "Writing is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Building & Planning", description: "Building & Planning is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Accounting", description: "Accounting is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Programming", description: "Programming is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Conference Planning", description: "Conference Planning is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Arts", description: "Arts are interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Translation", description: "Translation is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Branches & Chapters", description: "Translation are interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Design", description: "Design is interesting" },
            { logging: false }
        ),
        CommitteeInterest.create(
            { title: "Ordination", description: "Ordination is interesting" },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Committee");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Committee: ${err}`);
        });
};
