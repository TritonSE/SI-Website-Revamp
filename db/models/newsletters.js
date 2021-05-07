/**
 * This file defines the Sequelize schema for Newsletters, where each entry has an id,
 * volume, year, pdfLink, and imageLink.
 *
 * @summary   Defines schema for Newsletters.
 * @author    Dhanush Nanjunda Reddy
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "newsletters",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        volume: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        pdfLink: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        imageLink: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
