const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initNewsletters = require("./models/newsletters");
const initBranchesAndChapters = require("./models/branchesAndChapters");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),
        initNewsletters(),
        initBranchesAndChapters(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
