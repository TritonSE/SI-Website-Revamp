/**
 * This file defines the Sequilize schema for volunteerInterests.
 *
 * @summary   defines schema for volunteerInterests DB.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "volunteerInterests",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        volunteerId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        interestId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
