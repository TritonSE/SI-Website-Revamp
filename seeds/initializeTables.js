const initSample = require("./models/sample");
const initEPubFilters = require("./models/ePubFilters");
const initNewsletters = require("./models/newsletters");
const initPublications = require("./models/publications");
const initFilteredPublications = require("./models/filteredPublications");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initMemberships = require("./models/memberships");
const initMemberType = require("./models/membershipTypes");
const initNewsletters = require("./models/newsletters");
const initBranchesAndChapters = require("./models/branchesAndChapters");
const initAdminAccounts = require("./models/adminAccounts");
const initVolunteerInterests = require("./models/volunteerInterests");
const initEmailList = require("./models/emaillist");

module.exports = () => {
    Promise.all([
        initSample(),
        initEPubFilters(),
        initPublications(),
        initNewsletters(),
        initFilteredPublications(),

        // add new seeds here
        initConference(),
        initCommittee(),
        initMemberType(),
        initNewsletters(),
        initBranchesAndChapters(),
        initAdminAccounts(),
        initMemberships(),
        initVolunteerInterests(),
        initEmailList(),
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
