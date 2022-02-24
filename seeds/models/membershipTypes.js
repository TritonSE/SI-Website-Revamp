/**
 * File populates membershipTypes table.
 *
 * @summary   Populates membershipTypes table.
 * @author    Thomas Garry
 */

const MembershipType = require("../../db/models/membershipTypes");

module.exports = async () => {
    await Promise.all([
        MembershipType.create(
            {
                title: "Nun/Student/Unemployed",
                cost: 15,
            },
            { logging: false }
        ),
        MembershipType.create(
            {
                title: "General",
                cost: 30,
            },
            { logging: false }
        ),
        MembershipType.create(
            {
                title: "Lifetime - Nun/Student/Unemployed",
                cost: 150,
            },
            { logging: false }
        ),
        MembershipType.create(
            {
                title: "Lifetime",
                cost: 300,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished MembershipTypes");
        })
        .catch((err) => {
            // some error occurred
            console.error(`MembershipTypes: ${err}`);
        });
};
