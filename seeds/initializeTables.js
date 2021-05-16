const initSample = require("./models/sample");
const initEPubFilters = require("./models/ePubFilters");
const initNewsletters = require("./models/newsletters");

module.exports = () => {
    Promise.all([
        initSample(),
        initEPubFilters(),
        initNewsletters(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
