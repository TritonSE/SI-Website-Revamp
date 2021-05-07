const initSample = require("./models/sample");
const initConference = require("./models/conference");

module.exports = () => {
    Promise.all([
        initSample(),
        initConference(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
