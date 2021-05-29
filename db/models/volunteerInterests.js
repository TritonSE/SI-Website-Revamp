/**
 * This file defines the Sequilize schema for volunteerInterests.
 *
 * @summary   defines schema for volunteerInterests DB.
 * @author    Thomas Garry
 */
const db = require("../configDB");
const CommitteeInterests = require("./committeeInterests");
const Volunteers = require("./volunteers");

const VolunteerInterests = db.define(
    "volunteerInterests",
    {
        // column 'id' will auto-increment an integer value
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

// creates an association between VolunteerInterests and Volunteers
// new "volunteerId" column in table
VolunteerInterests.belongsTo(Volunteers, {
    foreignKey: "volunteerId",
});

// creates an association between VolunteerInterests and CommitteeInterests
// new "interestId" column in table
VolunteerInterests.belongsTo(CommitteeInterests, {
    foreignKey: "interestId",
});

module.exports = VolunteerInterests;
