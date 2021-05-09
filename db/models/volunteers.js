/**
 * This file defines the Sequilize schema for volunteers.
 *
 * @summary   defines schema for volunteers DB.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "volunteers",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
