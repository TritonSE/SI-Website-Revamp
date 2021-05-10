const initSample = require("./models/sample");
const initEPubFilters = require("./models/ePubFilters");

module.exports = () => {
    Promise.all([
        initSample(),
        initEPubFilters(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
