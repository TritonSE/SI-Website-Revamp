/**
 * This file defines the Sequilize schema for committeeInterests.
 *
 * @summary   defines schema for committeeInterests DB.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "committeeInterests",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
