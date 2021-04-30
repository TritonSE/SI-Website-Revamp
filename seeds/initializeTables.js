const initSample = require("./models/sample");

module.exports = () => {
    Promise.all([
        initSample(),

        // add new seeds here
    ])
        .then(() => {
            console.log("Done!");
        })
        .catch((err) => {
            console.error(err);
        });
};
