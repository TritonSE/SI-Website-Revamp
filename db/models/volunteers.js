/**
 * This file defines the Sequilize schema for volunteers.
 *
 * @summary   defines schema for volunteers DB.
 * @author    Thomas Garry
 */
const db = require("../configDB");
const UserInformation = require("./userInfo");

const Volunteers = db.define(
    "volunteers",
    {
        // column called 'id' will auto-increment an integer value
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

Volunteers.belongsTo(UserInformation, {
    foreignKey: "info",
});

module.exports = Volunteers;
