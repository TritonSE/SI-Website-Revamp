/**
 * File initializes "Publications" table schema.
 * Table is used to store information for various books.
 *
 * @summary   Initializes "Publications" table schema.
 * @author    Navid Boloorian
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    // table name
    "Publications",
    {
        // id field created by default

        title: {
            // creates varchar of specified length
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        author: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        feature: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        description: {
            type: Sequelize.STRING(300),
            defaultValue: "",
            allowNull: true,
        },
        imageLink: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        pdfLink: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },

        // for retrieval purposes only, not stored in DB
        filters: Sequelize.VIRTUAL,
    },
    {
        timestamps: true,
    }
);
