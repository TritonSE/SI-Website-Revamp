const Volunteers = require("../../db/models/volunteers");

module.exports = async () => {
    await Promise.all([
        Volunteers.create(
            {
                fName: "fName",
                mName: "mName",
                lName: "lName",
                phone: "000000000",
                email: "gmail@gmail.com",
                address: "United States",
                interests: ["1", "10"],
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Volunteers");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Volunteer: ${err}`);
        });
};
