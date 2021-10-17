/**
 * This file defines the Sequilize schema for execCommittee.
 *
 * @summary   defines schema for execCommittee.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

const ExecCommittee = db.define(
    "execCommittee",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        startYear: {
            type: Sequelize.INTEGER(),
            allowNull: false,
        },
        endYear: {
            type: Sequelize.INTEGER(),
            allowNull: false,
        },
        rank: {
            type: Sequelize.INTEGER(),
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        position: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        bio: {
            type: Sequelize.STRING(175),
            defaultValue: null,
        },
        imageLink: {
            type: Sequelize.STRING(500),
            allowNull: true,
            defaultValue: "https://assets.ucsd.edu/img/icon/headshot.jpg",
        },
        redirectLink: {
            type: Sequelize.STRING(500),
            defaultValue: null,
        },
        openInSameTab: {
            type: Sequelize.BOOLEAN(),
            defaultValue: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

module.exports = ExecCommittee;
