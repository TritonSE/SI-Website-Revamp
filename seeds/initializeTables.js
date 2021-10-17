const initSample = require("./models/sample");
const initEPubFilters = require("./models/ePubFilters");
const initNewsletters = require("./models/newsletters");
const initPublications = require("./models/publications");
const initFilteredPublications = require("./models/filteredPublications");

module.exports = () => {
    Promise.all([
        initSample(),
        initEPubFilters(),
        initPublications(),
        initNewsletters(),
        initFilteredPublications(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
