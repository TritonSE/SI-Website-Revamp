const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initUserInfo = require("./models/userInfo");
const initMemberType = require("./models/membershipTypes");
const initNewsletters = require("./models/newsletters");
const initBranchesAndChapters = require("./models/branchesAndChapters");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),
        initCommittee(),
        initUserInfo(),
        initMemberType(),
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
