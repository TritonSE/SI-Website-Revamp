/**
 * This file defines the Sequelize schema for News and Events.
 *
 * @summary   defines schema for News and Events.
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "newsAndEvents",
    {
        // By default, there will be a column called 'id' that will
        // auto-increment an integer value
        title: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(300),
            allowNull: true,
            defaultValue: "",
        },
        imageLink: {
            type: Sequelize.STRING(1000),
            allowNull: false,
        },
        redirectLink: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        openInSameTab: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultVale: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
