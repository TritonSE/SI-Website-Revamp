/**
 * This file defines the Sequilize schema for Conferences.
 *
 * @summary   defines schema for Conferences.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "conference",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        confNum: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        slideShowImages: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        programs: {
            type: Sequelize.JSON,
            allowNull: true,
        },
        presentations: {
            type: Sequelize.JSON,
            allowNull: true,
        },
        abstracts: {
            type: Sequelize.JSON,
            allowNull: true,
        },
        video: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
        theme: {
            type: Sequelize.TEXT("medium"),
            allowNull: true,
        },
        signUpLink: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
