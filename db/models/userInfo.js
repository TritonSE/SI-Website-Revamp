/**
 * This file defines the Sequilize schema for userInfo. Used by multiple other tables.
 *
 * @summary   defines schema for userInfo.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "userInfo",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        fName: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        mName: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        lName: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        phone: {
            type: Sequelize.INTEGER(15),
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING(56),
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
