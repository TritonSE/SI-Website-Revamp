const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initMemberships = require("./models/memberships");
const initMemberType = require("./models/membershipTypes");
const initNewsletters = require("./models/newsletters");
const initBranchesAndChapters = require("./models/branchesAndChapters");
const initAdminAccounts = require("./models/adminAccounts");
const initVolunteerInterests = require("./models/volunteerInterests");
const initEmailList = require("./models/emaillist");
const initExecCommittee = require("./models/execCommittees");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),
        initCommittee(),
        initMemberType(),
        initNewsletters(),
        initBranchesAndChapters(),
        initAdminAccounts(),
        initMemberships(),
        initVolunteerInterests(),
        initEmailList(),
        initExecCommittee(),
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
