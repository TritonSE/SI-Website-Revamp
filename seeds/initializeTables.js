const initSample = require("./models/sample");
const initConference = require("./models/conference");
const initCommittee = require("./models/committeeInterests");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),
        initCommittee(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
