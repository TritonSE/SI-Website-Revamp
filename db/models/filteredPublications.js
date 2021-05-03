/**
 * File initializes "FilteredPublications" table schema.
 * Table is used to store information for publication filtering.
 *
 * @summary   Initializes "FilteredPublications" table schema.
 * @author    Navid Boloorian
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    // table name
    "FilteredPublications",
    {
        // id field column by default

        publicationId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
        },
        filterId: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
        },
        pdfLink: {
            type: Sequelize.TEXT("tiny"),
            allowNull: false,
        },
    }
);
