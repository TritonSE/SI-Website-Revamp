const initSample = require("./models/sample");
const initEPubFilters = require("./models/ePubFilters");
const initNewsletters = require("./models/newsletters");
const initPublications = require("./models/publications");
const initFilteredPublications = require("./models/filteredPublications");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initMemberships = require("./models/memberships");
const initMemberType = require("./models/membershipTypes");
const initBranchesAndChapters = require("./models/branchesAndChapters");
const initAdminAccounts = require("./models/adminAccounts");
const initVolunteerInterests = require("./models/volunteerInterests");
const initEmailList = require("./models/emaillist");
const initExecCommittee = require("./models/execCommittees");
const initNewsEvents = require("./models/newsAndEvents");

module.exports = () => {
    Promise.all([
        initSample(),
        initEPubFilters(),
        initPublications(),
        initNewsletters(),
        initFilteredPublications(),
        initConference(),
        initCommittee(),
        initMemberType(),
        initBranchesAndChapters(),
        initAdminAccounts(),
        initMemberships(),
        initVolunteerInterests(),
        initEmailList(),
        initExecCommittee(),
        initNewsEvents(),
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
