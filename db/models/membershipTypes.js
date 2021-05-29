/**
 * This file defines the Sequilize schema for membershipTypes. Used by other tables.
 *
 * @summary   defines schema for membershipTypes.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "membershipTypes",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        title: {
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
        cost: {
            type: Sequelize.DECIMAL(5, 2),
            allowNull: true,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
