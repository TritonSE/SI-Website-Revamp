const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initUserInfo = require("./models/userInfo");
const initMemberType = require("./models/membershipTypes");

module.exports = () => {
    Promise.all([initSample(), initConference(), initCommittee(), initUserInfo(), initMemberType()])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
