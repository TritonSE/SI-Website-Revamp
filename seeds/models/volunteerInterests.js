const VolunteerInterests = require("../../db/models/volunteerInterests");

module.exports = async () => {
    await Promise.all([
        VolunteerInterests.create(
            {
                volunteerId: "1",
                interestId: "1",
            },
            { logging: false }
        ),
        VolunteerInterests.create(
            {
                volunteerId: "1",
                interestId: "5",
            },
            { logging: false }
        ),
        VolunteerInterests.create(
            {
                volunteerId: "1",
                interestId: "10",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished VolunteerInterests");
        })
        .catch((err) => {
            // some error occurred
            console.error(`VolunteerInterests: ${err}`);
        });
};
