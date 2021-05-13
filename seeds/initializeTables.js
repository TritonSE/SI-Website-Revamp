const initSample = require("./models/sample");
const initNewsletters = require("./models/newsletters");

module.exports = () => {
    Promise.all([
        initSample(),
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
