const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");
const initUserInfo = require("./models/userInfo");

module.exports = () => {
    Promise.all([initSample(), initConference(), initCommittee(), initUserInfo()])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
