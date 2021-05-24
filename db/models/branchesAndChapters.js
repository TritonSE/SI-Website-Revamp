/**
 * This file defines the Sequelize schema for Branches and Chapters.
 *
 * @summary   defines schema for Branches and Chapters.
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "branchesAndChapters",
    {
        // By default, there will be a column called 'id' that will
        // auto-increment an integer value
        name: {
            type: Sequelize.STRING(56),
            allowNull: false,
        },
        coordinates: {
            type: Sequelize.GEOMETRY("POINT"),
            allowNull: false,
        },
        isBranch: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        email: {
            type: Sequelize.STRING(320),
            allowNull: false,
        },
        siteLink: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
