const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initMemberships = require("./models/memberships");
const initMemberType = require("./models/membershipTypes");
const initNewsletters = require("./models/newsletters");
const initVolunteerInterests = require("./models/volunteerInterests");
const initEmailList = require("./models/emaillist");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),
        initCommittee(),
        initMemberType(),
        initNewsletters(),
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
