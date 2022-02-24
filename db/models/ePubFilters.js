/**
 * File initializes "ePubFilters" table schema.
 * Table is static and used to store all valid filter names.
 *
 * @summary   Initializes "ePubFilters" table schema.
 * @author    Navid Boloorian
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    // table name
    "ePubFilters",
    {
        // id field column by default

        title: {
            type: Sequelize.STRING(100),
        },
    }
);
